import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput } from "react-native";
// import QuestionMarkIcon from "../assets/images/question-mark-icon.png";


const About = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        Tell us a little about yourself and your situation.
      </Text>
      <Text style={styles.textBold}>
        How can we help?
      </Text>
      <View styles={{flexDirection: "row", width: 500, height: 500, border: "solid", borderWidth:4, borderColor:"red", }}>
        <TextInput style={{backgroundColor: "white", width: 240, placeholderTextColor: "gray", height: 35, borderRadius: 16, paddingHorizontal: 10, marginTop: 10, }} placeholder="Start typing here" />
         <View >
          <Image source={require("../assets/images/question-mark-icon.png")}/>
         </View>
         
      </View>
    </View>
  ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    paddingTop: 140,
    paddingLeft: 20,
  },
  textRegular: {
    color: "#E9FBFF",
    fontFamily: "KarlaRegular",
    fontSize: 16,
    marginTop: 20,
    lineHeight: 18.7,
  },
  textBold: {
    fontFamily: "KarlaRegular",
    color: "white",
    fontSize: 24,
    lineHeight: 28,
  },
});



export default About