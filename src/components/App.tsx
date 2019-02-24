import React from 'react';
import { StyleSheet, Text, ScrollView, Image, View, StatusBar, TouchableHighlight, GestureResponderEvent } from 'react-native';
import CityInfoCard, { ICityInfoPros } from './CityInfoCard';
import StrayaCitiesData from '../CitiesData';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  _onPressButton: (event: GestureResponderEvent) => void;

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView>
          {
            StrayaCitiesData.map((data: ICityInfoPros, i) => {
              return (
                <View key={i}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <CityInfoCard
                      name={data.name}
                      weather={data.weather}
                      image={data.image}
                    />
                  </TouchableHighlight>
                </View>
              )
            })
          }
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 300,
  }
});
