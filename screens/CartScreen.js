import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
