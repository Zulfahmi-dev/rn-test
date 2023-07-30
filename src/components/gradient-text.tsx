import {View, Text, TextProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomLinearGradient, {
  CustomLinearGradientProps,
} from './linear-gradient';

const GradientText: React.FC<TextProps> = props => {
  return (
    <MaskedView maskElement={<Text {...props} />} style={{flex:0, alignSelf:'flex-start'}}>
      <CustomLinearGradient>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </CustomLinearGradient>
    </MaskedView>
  );
};

export default GradientText;
