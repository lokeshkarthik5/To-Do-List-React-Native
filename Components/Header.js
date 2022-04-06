import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To Do List</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 'auto',
    backgroundColor: 'darkslateblue'

  },
  text:{
    color:'#fff',
    fontSize: 30,
    textAlign: 'center',
  }
});