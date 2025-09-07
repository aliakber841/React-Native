import { useState } from "react";
import {StyleSheet,TextInput,Button,View,Modal,Image} from "react-native"
function GoalInput(props){
     const [enteredGoalText,setEnteredGoalText] =useState('');

     function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler(){
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }
    return (
      <Modal visible={props.visible} animationType="slide">
<View style={styles.inputContainer}>
  <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} 
        placeholder='Your Course Goal!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
  <Button title="Cancel" onPress={props.onCancel}
  color="#f31282"/>
          </View>
    <View style={styles.button}>
  <Button title='Add Goal'
        onPress={addGoalHandler}
        color="#7f32e3ff"/>
    </View>
        </View>
         </View>
         </Modal>
    );
}
export default GoalInput
const styles=StyleSheet.create({
    inputContainer:{
    padding:16,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#311b6b'
  }, image:{
    height:100,
    width:100,
    margin:20,
  },
  textInput:{
    borderWidth:2,
    borderColor:'#e4d0ff"',
    backgroundColor:"#e4d0ff",
    color:'#120438',
    width:'100%',
    borderRadius:6
  }, buttonsContainer:{
    flexDirection:'row',
    marginTop:16,
    padding:16,
  },button:{
    width:100,
    marginHorizontal:8
  }
})