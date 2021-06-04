import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CycleItem  from "../CycleItem";

import styles from './styles';
import cycles from './cycle';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cycles}
        renderItem={({item}) => <CycleItem  cycle={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
