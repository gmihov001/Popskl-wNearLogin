import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import * as Location from "expo-location";

export function GenerateQR({ route, navigation }) {
  const [user, setUser] = useState(route.params.user);
  const [dataObj, setDataObj] = useState(null);

  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        if (location) {
          setDataObj({
            claimant: user,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      })();
    }

    return () => (isCancelled = true);
  }, []);

  if (dataObj) {
    alert(
      `QR generated for claimant: ${dataObj.claimant}, coordinates: ${dataObj.latitude}, ${dataObj.longitude}`
    );
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
