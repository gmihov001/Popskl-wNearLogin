import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import * as Location from "expo-location";

export function GenerateQR() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState("Claimant User");
  var dataObj = null;

  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }

    return () => (isCancelled = true);
  }, []);

  if (errorMsg) {
    alert(errorMsg);
  } else if (location) {
    dataObj = {
      claimant: user,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    console.log(dataObj);
  }

  return (
    <View style={styles.container}>
      {dataObj ? (
        <SvgQRCode size={180} value={JSON.stringify(dataObj)} />
      ) : (
        <Text style={{ fontSize: 20, color: "royalblue", textAlign: "center" }}>
          Generating... Please hold
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  qr: {
    width: 150,
    height: 150,
  },
});
