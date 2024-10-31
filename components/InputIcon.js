import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { gStyle } from '../styles/style'

export default function InputIcon({ placeholder, Icon }) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={[gStyle.input, isFocused && gStyle.focusedInput]}>
            <Icon style={{ marginRight: 10 }} />
            <TextInput
                style={[gStyle.text, { flex: 1 }]}
                placeholder={placeholder}
                placeholderTextColor={'#7E7974'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})