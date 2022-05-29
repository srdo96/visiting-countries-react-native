import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>
      <Text style={styles.header}>Country: {country.name.common}</Text>

      <Image
        source={{ uri: country.flags.png }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { marginTop: 50, fontSize: 20, color: "red" },
});
