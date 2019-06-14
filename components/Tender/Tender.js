import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  render() {
    return (
     <View style={styles.card}>
      <Text>{this.props.joke}</Text>
     </View>
    )
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>No More Jokes</Text>
      </View>
    )
  }
}

export default class Tender extends React.Component {

  handdleAccept () {
    console.log('I like');
  }

  handleReject () {
    console.log('I do not like');
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObject) => <Card joke={jokeObject.joke}/>}
        renderNoMoreCards={() => <NoMoreCards/>}
        handleYup={this.handdleAccept}
        handleNope={this.handleReject}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 300,
    backgroundRadius: 10,
    borderColor: '#ea394b',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})