import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

const { headerContainer, header } = styles

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Crypto App</Text>
        </View>
    )
}

export default Header