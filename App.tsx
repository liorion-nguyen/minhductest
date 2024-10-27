import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signup';
import { useState } from 'react';
import TodoList from './src/screens/todoList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login/> */}
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
