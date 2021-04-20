import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput} from 'react-native';
import styles from '../theme/styles';
import { Ionicons } from '@expo/vector-icons'; 


const Input = (props) => {
    const [value, setValue] = useState("");
    const { addReminder } = props;

    //Kunne hente ut verdien/teksten fra input feltet ved å trykke "Legge til/ + knappen"
    const handleAddTodo = () => {
        addReminder(value);
        setValue("");
    };

    return (
        <View style={styles.containerInput}>
            <TextInput onChangeText={(text) => {
                setValue(text);
            }}
            placeholder="Skriv her"
            value={value}
            placeholderTextColor="black" 
            style={styles.textInput}>
            </TextInput>
            <TouchableOpacity 
            onPress={handleAddTodo} 
            style={styles.addButton}>
                <Ionicons name="add-sharp" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
};


export default Input;