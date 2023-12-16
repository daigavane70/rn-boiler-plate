import {View, Button} from 'react-native';
import React from 'react';
import {colorBoxStyles} from './ColorBox.styles';

interface ColorBoxProps {
  color: string;
}

export default function ColorBox(props: ColorBoxProps) {
  const {color} = props;
  const styles = colorBoxStyles();
  return (
    <View style={styles.colorBox}>
      <Button color={color} title={'This is ' + color + ' color'} />
    </View>
  );
}
