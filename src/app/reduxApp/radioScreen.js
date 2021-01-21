import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import RadioButtonRN from "radio-buttons-react-native";

const data = [
  {
    label: "Parent",
  },
  {
    label: "Child",
  },
  {
    label: "Sub Child",
  },
];

export default class radioScreen extends Component {


  constructor(props) {

    super(props);

    this.inputRef = React.createRef();
 
 }

  render() {
    return (
      <View style={styles.containerViewStyle}>
        <RadioButtonRN  
          ref={this.inputRef} 
          
          data={data} 
          selectedBtn={(e) => console.log(e)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
