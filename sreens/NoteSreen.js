
import React,{useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem'
import GoalInput from '../components/GoalInput'

const NoteSreen =()=> {

const [courseGoals, setCourseGoal] = useState([])
const [isAddMode, setIsAddMode] = useState(false)

const addGoalHandler =(enteredGoal)=>{
 setCourseGoal(currentGoals => [...currentGoals, {id:Math.random().toString() ,inputValue: enteredGoal}])
 setIsAddMode(false)
}

const removeGoalHandler =(goalId)=>{
  setCourseGoal(currentGoals=>{
    return currentGoals.filter(goal =>goal.id !==goalId)
  })
}

const cancelAdditionGoalHandler =()=>{
  setIsAddMode(false)
}

return (
    <View style={styles.screen}>
      <Button title="ADD YOUR NOTE" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancle ={cancelAdditionGoalHandler}/>
      <FlatList
       keyExtractor ={(item,index)=>item.id}
       data={courseGoals}
         renderItem={ itemData => <GoalItem id={itemData.item.id}  onDelete={removeGoalHandler} title ={itemData.item.inputValue} />}
         />
    </View >
  );
}
export default NoteSreen
const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#fff',
  }

});
