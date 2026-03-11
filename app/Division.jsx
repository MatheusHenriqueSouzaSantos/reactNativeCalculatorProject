import { FontAwesome6 } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Division() {
  const [firstNumber,setFirstNumber]=useState();
  const [secondNumber,setSecondNumber]=useState();
  const [resultNumber,setResultNumber]=useState(); 
  function act(){ 
    // if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber) ){
    //  //   return; // 
    //} 
    let result=Number(firstNumber)/Number(secondNumber) 
    setResultNumber(result); 
    setFirstNumber("") 
    setSecondNumber("") 
  } 
  function resetFields(){ 
    setFirstNumber(""); 
    setSecondNumber(""); 
    setResultNumber("") 
  } 
  useFocusEffect(useCallback(()=>{
    resetFields()
  },[]))
  return (
    <View style={styles.viewBody}>
      <View style={styles.viewEnvolvingText}> 
        <TextInput style={[styles.numbersTextInputs, styles.firstTextInput]}
        value={firstNumber} onChangeText={setFirstNumber}> 
        </TextInput> 
        <FontAwesome6 style={{marginTop: 15}} name="divide" size={50} color="black"/> 
        <TextInput style={styles.numbersTextInputs} value={secondNumber} onChangeText={setSecondNumber}> 
        </TextInput> 
        <FontAwesome6 style={{marginTop: 15}} name="equals" size={50} color="black"/> 
        <Text style={styles.TextOutPut}> {resultNumber} </Text> 
        </View> 
        <View style={styles.buttonsView}> 
          <TouchableOpacity style={styles.resetButton} onPress={resetFields}> 
            <Text style={{fontSize: 16, fontWeight: "bold"}}> Reset 
            </Text> 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.actButton} onPress={act}> 
            <Text style={{fontSize: 16, fontWeight: "bold"}}>Divide</Text> 
          </TouchableOpacity> 
        </View>
      </View> 
      ); 
    } 
    let styles= StyleSheet.create({ 
      viewBody:{ 
        width: "100%", 
        height: 3000, 
        backgroundColor: "#D6D6D6", 
      }, 
      viewEnvolvingText:{ display: "flex", 
        flexDirection: "row", 
        gap : 18, 
      }, 
      firstTextInput:{
        marginLeft: "3%" 
      }, 
      numbersTextInputs: { 
        width: 70, 
        height: 70, 
        backgroundColor: "white", 
        marginTop: "1%", 
        borderRadius: 10, 
        fontSize: 50, 
        textAlign: "center",
        paddingTop: 10 
      }, 
      TextOutPut: { 
        width: 70, 
        height: 70, 
        backgroundColor: "white", 
        marginTop: "1%", 
        borderRadius: 10, 
        fontSize: 50, 
        textAlign: "center",
        paddingTop: 12,
        paddingLeft: -5  
      }, 
      actButton:{ 
        width: 100, 
        height: 50, 
        backgroundColor: "#8A8A8A", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10, 
        marginLeft: 283, 
        marginTop: -48 
      }, 
      resetButton: { 
        width: 100, 
        height: 50, 
        backgroundColor: "#8A8A8A", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10, 
        marginTop: 15, 
        marginLeft: "3%" 
      }, 
})