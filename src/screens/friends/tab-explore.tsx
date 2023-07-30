import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {colors, sizes} from '../../constants/themes';
import ExploreItem from './components/explore-item';
import ExploreData from './data/explore.json';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const TabExplore: React.FC = props => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        {ExploreData?.map((item: any, i: number) => (
          <ExploreItem item={item} key={i} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    padding: sizes.base
  },
});

export default TabExplore;
