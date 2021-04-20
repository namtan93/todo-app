import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../theme/styles';
import { AntDesign } from '@expo/vector-icons';

const Todo = (props) => {
    const {item, index, removeReminder} = props;
   
    //Lister som blir lagt inn med fjern knapp.
    return (
        <View style={styles.containerTodo}>
            <TextInput value={item} style={styles.textListTodo} />
        <TouchableOpacity 
        style={{ justifyContent: "center", marginHorizontal: 10, }} 
        onPress={() => {
            removeReminder(index);
        }}>
            <AntDesign name="delete" size={24} color="black"/>    
        </TouchableOpacity>
        </View>
    )
};

export default Todo;
