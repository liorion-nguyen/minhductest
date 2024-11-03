import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../styles/common";
import { useState } from "react";
   
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin() {
        if (!email || !password) {
            Alert.alert('Error', 'Email and password are required');
        }
        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters');
        }
        if (!email.includes('@')) {
            Alert.alert('Error', 'Email is invalid');
        }
        if (email == 'Admin@gmail.com' && password == 'Admin123') {
            Alert.alert('Success', 'Login successful');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/icon.png')} style={commonStyles.logo}/>
            <Text style={commonStyles.title}>Login</Text>
            <TextInput placeholder="Email" style={commonStyles.input} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" style={commonStyles.input} value={password} onChangeText={setPassword}/>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity style={commonStyles.button} onPress={handleLogin}>
                <Text style={commonStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text>Don't have an account? <Text style={commonStyles.textLink}>Sign Up</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Sổ theo chiều dọc
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
        padding: 20,
        gap: 20
    },
    forgotPassword: {
        textAlign: 'right',
        width: '100%',
    }
})