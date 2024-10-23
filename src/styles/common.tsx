import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textLink: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    logo: {
        width: 150,
        height: 150,
    }
})