import {FlatList, Text, View} from 'react-native';
import React from 'react';

export interface TodoListProp {
  title: string;
  data: Array<any>;
}

export default function TodoList(props: TodoListProp) {
  const {data, title} = props;

  const renderSeperator = () => <View style={{marginBottom: 2}} />;

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 14}}>{title}</Text>
      <FlatList
        data={data}
        renderItem={item => (
          <View>
            <Text> - {item.item}</Text>
          </View>
        )}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}
