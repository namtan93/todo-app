import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView  } from 'react-native';
import Todo from './components/todo';
import Input from './components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './theme/styles';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


const STORAGE_KEY = '@todo';

export default function App() {
  const [reminderList, setReminderList] = useState([""]);

//Legge til tekst
  const addReminder = (todo) => {
    setReminderList([...reminderList, todo]);
  };

//Fjerne tekst
  const handleRemove = (index) => {
      setReminderList(
      reminderList.filter((item, x) => {
        return index !== x;
      })
    );
  };


//Local storage
useEffect(() => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if(jsonValue != null) {
        const parsedJson = JSON.parse(jsonValue);
        setReminderList(parsedJson);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getData();
}, []);

useEffect(() => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };
  storeData(reminderList);
}, [reminderList]);


  return (
    <ScrollView style={[{ flex: 1, marginTop: Constants.statusBarHeight}]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Huskeliste </Text>
        </View>
        <Input addReminder={addReminder} />
          {reminderList.map((item, index) => {
            return <Todo 
            key={index}
            item={item} 
            index={index} 
            removeReminder={handleRemove}
            /> 
          })}
      <StatusBar style="auto"/>
      </View>
    </ScrollView>
  );
};



