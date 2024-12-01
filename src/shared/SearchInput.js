import React, { useState } from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { gStyle } from "../../styles/style"
import { Search } from "../../assets/icons/Search";

export default function SearchInput({
  value,
  onChangeText,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[gStyle.input, isFocused && gStyle.focusedInput]}>
      <TextInput
        value={value}
        style={[gStyle.text, { flex: 1 }]}
        placeholder='Search books'
        placeholderTextColor={"#7E7974"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
      <Search style={{ marginLeft: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({})