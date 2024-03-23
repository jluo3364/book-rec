import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data === "Login success") {
                    console.log("login success");
                } else {
                    setErrorMessage(data.error || 'An error occurred while signing up');
                }
            } else {
                setErrorMessage('An error occurred while signing up');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setErrorMessage('An error occurred while signing up');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleSignup} />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
    },
    error: {
        color: 'red',
    },
});

export default Login;
