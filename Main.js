import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";

export function Main() {
  let [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "left" }}>
        Use my current location{" "}
      </Text>
      <Text style={{ fontSize: 18, textAlign: "left" }}>Required </Text>
      <StatusBar style="auto" />
      <Switch
        style={{ marginBottom: "40%" }}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        value={isEnabled}
      />
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
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
          A
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{
          backgroundColor: "royalblue",
          borderRadius: "15px",
          width: "90%",
          padding: "5%",
          display: "flex",
          justifyContents: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          B
        </Text>
      </TouchableOpacity>
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
