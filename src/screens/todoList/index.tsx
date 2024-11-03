import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Task = {
    content: string;
    isEdit: boolean;
}

export default function TodoList() {
    const [task, setTask] = useState('');
    const [listTask, setListTask] = useState<Task[]>([]);
    function handleAddTask() {
        setListTask([...listTask, {content: task, isEdit: false}]);
        setTask('');
    }
    function handleDeleteTask(index: number) {
        let newFake = [];
        for (let i = 0; i < listTask.length; i++) {
            if (i !== index) {
                newFake.push(listTask[i]);
            }
        }
        setListTask(newFake);
        // Cach 2:
        // let newFake = listTask.filter((item, i) => i != index);
        // setListTask(newFake);
    }
    function handleUpdateTask(index: number) {
        let newFake = [...listTask];
        newFake[index].isEdit = !newFake[index].isEdit;
        setListTask(newFake);
    }
    function handleUpdateContent(text: string, index: number) {
        let newFake = [...listTask]; // Copy listTask
        newFake[index].content = text; // Update content của phần tử có chỉ số là index thành text.
        setListTask(newFake);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoList</Text>
            <View style={styles.boxGroup}>
                <TextInput placeholder="Add a new task" style={styles.input} value={task} onChangeText={setTask}/>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
                    <Text style={styles.textButton}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listTask}>
                {
                    listTask.map((item, index) => (
                        <View style={styles.boxGroup}>
                            {
                                item.isEdit
                                ? <TextInput placeholder={item.content} value={item.content} style={styles.textTask} onChangeText={text => handleUpdateContent(text, index)}/> 
                                : <Text style={styles.textTask}>{item.content}</Text>
                            }
                            <Button title="Update" onPress={() => handleUpdateTask(index)}/>
                            <Button title="Delete" onPress={() => handleDeleteTask(index)}/>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        gap: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    boxGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '100%'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10, // Cách trên dưới trái phải đều 10
        paddingLeft: 20,
        fontSize: 16
    },
    buttonAdd: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        width: 80,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textTask: {
        flex: 1,
        fontSize: 16
    },
    listTask: {
        flexDirection: 'column',
        gap: 10
    }
});
