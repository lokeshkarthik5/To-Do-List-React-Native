import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';

export default function AddItem({addItem}) {
    const [text,setText]=useState('')

    const onChange=textValue=>setText(textValue);

    

  return (
    <View>
        <TextInput placeholder='Add Item'style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
            <Text style={styles.btnText}>➕</Text>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({

    input:{
        height:60,
        padding:8,
        fontSize:16,
    },
    btn:{
        backgroundColor:'#c2bad8',
        padding:9,
        margin:5,
    },
    btnText:{
        color:'darkslateblue',
        fontSize:20,
        textAlign:'center',
    }

});