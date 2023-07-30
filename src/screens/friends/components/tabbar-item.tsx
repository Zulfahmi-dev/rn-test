import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Typography} from '../../../components';
import {colors, sizes} from '../../../constants/themes';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

type TabbarItemProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};
const TabbarItem: React.FC<TabbarItemProps> = ({label, isActive, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.tabBarItem,
        {borderBottomColor: isActive ? colors.violet : 'white'},
      ]}
      activeOpacity={.8}
      onPress={onPress}>
      <Typography color={isActive ? colors.violet : 'white'} body medium>
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default TabbarItem;

const styles = StyleSheet.create({
  tabBarItem: {
    width: screenWidth / 3.6,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: sizes.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
