import {View, Button} from 'react-native';
import React from 'react';

interface FooterBarProps {
  tabs: string[];
}

export default function FooterBar(props: FooterBarProps) {
  const {tabs} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 4,
      }}>
      {tabs.map((tab, index) => {
        return (
          <View
            key={index}
            style={{flex: 1, marginRight: index === tabs.length - 1 ? 0 : 4}}>
            <Button onPress={() => null} title={tab} />
          </View>
        );
      })}
    </View>
  );
}
