import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export function ReadQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [thisUser, setThisUser] = useState("Verifying User");

  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    let dataJson = JSON.parse(data);
    dataJson.timestamp = new Date();
    dataJson.verifier = thisUser;
    console.log(dataJson);

    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataJson),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(`QR data saved for: `, resJson);
        alert("QR data saved");
      })
      .catch((err) => {
        console.log(err);
        alert("QR data failed: Scan again");
      });

    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned ? (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={{
            backgroundColor: "royalblue",
            borderRadius: "15px",
            width: "90%",
            margin: "5%",
            padding: "5%",
            display: "flex",
            justifyContents: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Tap to Scan Again
          </Text>
        </TouchableOpacity>
      ) : null}
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
});
