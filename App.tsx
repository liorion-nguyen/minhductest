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


/*
Lấy project từ remote git: git clone https://github.com/username/repository.git (npm install)
Kiểm tra đang connect đến remote nào: git remote -v
Xoá remote hiện tại: git remote remove origin
Thêm remote mới: git remote add origin https://github.com/username/repository.git

Cách đẩy code:
git add . : Thêm file vào commit
git commit -m "message": Đẩy commit lên remote
git push origin main: Đẩy code lên remote
*/