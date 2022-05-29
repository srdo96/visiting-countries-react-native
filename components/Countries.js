import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import react, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text>Countries: {countries.length}</Text>
      <TextInput style={styles.input} />
      <ScrollView>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  //   header: { marginTop: 50, fontSize: 20, color: "red" },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
