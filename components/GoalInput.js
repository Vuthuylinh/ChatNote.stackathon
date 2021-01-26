import React,{useState}from 'react';
import { StyleSheet,  View, Button, TextInput, Modal} from 'react-native'


const GoalInput =(props)=> {
  const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler=(enteredText)=>{
  setEnteredGoal(enteredText)
}

const createGoalHandler =()=>{
  props.onAddGoal(enteredGoal)
}

 return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="CANCLE" color="red" onPress={props.onCancle}/>
            </View>
            <View style={styles.button}>
                  <Button title="ADD"  onPress={createGoalHandler}/>
            </View>
          </View>

        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  input:{
    marginBottom: 10,
    width: "80%",
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:"60%"
  },
  button:{
    width:"40%"
  }

});

export default GoalInput

