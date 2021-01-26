import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


const GoalItem = (props) => {

    return (
      <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem} >
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

  listItem:{
    padding: 10,
    margin: 5,
    backgroundColor: 'pink',
    borderColor:'blue',
    borderWidth: 1
  }

});
export default GoalItem

