import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Input from './components/Input/Input';
import Tender from './components/Tender/Tender';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    state = {
    value: '',
    jokes: []

  }
  
  render() {
    return (
      <View style={styles.container}>
         <Input
         updateJokes={(jokes) => this.setState({jokes: jokes})}
        value={this.state.value}
        onChange={(value) => this.setState({ value: value})}
      />
        <Tender 
          jokes={this.state.jokes}
          style={styles.tender}
          />
        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  tender: {
    flex: 2
  }
});
