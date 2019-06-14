import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

  fetchData () {
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    .then((response) => { return response.json()})
      .then((data) => this.props.updateJokes(data.value))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={"numeric"}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
        style={styles.input}
        />
        <TouchableHighlight
        style={styles.button}
        onPress={() => this.fetchData()}
        >
  <Text style={styles.text}>
  Search
  </Text>      
  </TouchableHighlight>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})