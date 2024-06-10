import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(['End Hilter', 'Delete Automic Bombs from Existence','Recolonize Africa']);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

 
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> World Domination Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
                

              )
            })
          }
        </View>
        </View>

        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={()=> handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  tasksWrapper:{
    padding: 80,
    paddingHorizontal: 20,
  },
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold',
},
items:{
  marginTop: 30,
},
writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

},
input:{
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFFFFF',
  borderRadius: 60,
  borderColor: '#581845',
  borderWidth: 1,
  width: 250,
},
addWrapper:{
  backgroundColor: '#FFFFFF',
  borderRadius: 60,
  borderColor: '#581845',
  borderWidth: 1,
  width: 60,
  height: 60,
  alignItems: 'center',
  justifyContent: 'center',
},
addText:{},
});
