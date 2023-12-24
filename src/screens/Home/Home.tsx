import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorBox from '../../components/ColorBoxes/ColorBox';
import {HomeScreenProps} from './typings';

const Home = (props: HomeScreenProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text>This is a React Native boiler plate project</Text>
        <Text style={{marginTop: 8}}>
          Navigation - Stack navigation is implemented for 3 screens using React
          Navigation
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 16,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('News');
          }}>
          <Text>See news</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text>Check profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
