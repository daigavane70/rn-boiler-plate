/**
 * Author - Vedant Daigavane
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ColorBox from './src/components/ColorBoxes/ColorBox';

function App(): JSX.Element {
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
    </SafeAreaView>
  );
}

export default App;
