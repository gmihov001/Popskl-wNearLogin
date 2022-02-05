import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Main from "./Main";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </View>
    </NativeRouter>
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
