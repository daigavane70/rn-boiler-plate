import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import ColorBox from '../../components/ColorBoxes/ColorBox';
import {HomeScreenProps} from './typings';

const Home = (props: HomeScreenProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', padding: 24}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 16}}>
          Here are some boxes for you
        </Text>
        <View style={{flex: 1}}>
          {['aqua', 'blue', 'yellow', 'red'].map((color, index) => (
            <ColorBox color={color} key={color + index} />
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 4,
        }}>
        <Button
          onPress={() => {
            navigation.navigate('News');
          }}
          title="See News"
        />
        <Button
          onPress={() => {
            navigation.navigate('Profile');
          }}
          title="Check Profile"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
