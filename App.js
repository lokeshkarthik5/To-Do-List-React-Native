import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';
import { v4 as uuid } from 'uuid';

export default function App() {
  const [lists, setList]= useState([

  ]);

  const deleteItem=(id)=>{
    setList(prevItems=>{
      return prevItems.filter(item=>item.id!=id)
    });
  };

  const addItem=(text)=>{
    setList(prevItems=>{
      return [{id: uuid(),text}, ...prevItems]
    })
  }
  
  return (
    <View style={styles.container}>
    <Header/>
    <AddItem addItem={addItem} />
    <FlatList 
      data={lists}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      
      
      
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex:1,
    paddingTop:60,
    
   
  },

  
});
