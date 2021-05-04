import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header backgroundColor={'pink'}
      centerComponent={{
        text: 'Story Hub',
        style: {fontFamily: 'Times', fontSize: 27, fontWeight: 'bold'}
      }}/>
      <Text style={styles.text}>The Golden Bird [Part - 1]</Text>

     <Text style = {styles.text2}>“Woooww! This is true Beauty!”- Jacob thinks. “Let’s move further bro”, his friend Edward whispered.
… There were four friends named Jacob, Edward, Victoria and Bella. They lived in Sydney.  They were really good at their friendship, they always loved to be in their own imaginary worlds. Their Summer Vacations were going on and they all were at Jacob’s place, as his parents were out due to some urgent work. Victoria said “Let’s watch a horror film.” “Okay” replied Edward, “but wait for me cause I’m just going to get something to eat.” “No Problem” Jacob and Bella agreed. After 5 minutes Edward shouted- “Jacobbbb!! Come here!! .” After listening to his words Jacob, Victoria and Bella ran out of the room to see, what happened to Edward. After coming to the kitchen they saw something which was just unexpected by them! He saw massive door, which was going somewhere far away, “why didn’t you ever told me about this?” asked Edward. “Bro even I didn’t knew anything about this door and all” Jacob replied. Then, they thought of going inside. They all were excited and afraid at the same time. But, they gathered all the courage in themselves and finally moved inside that........
</Text>
<Text style = {styles.text3}>
TO BE CONTINUED!.
</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'times',
    marginTop: 10,
    color : 'purple',
    backgroundColor : 'yellow'
  },

text3 :{
  fontSize : 20,
  color : 'white',
  backgroundColor : 'purple',
  marginRight : 90,
  marginLeft : 60
},
text2 : {
  fontSize : 14,
  marginRight : 3,
  marginLeft : 5
}
})