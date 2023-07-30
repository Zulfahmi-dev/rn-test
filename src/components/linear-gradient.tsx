import {View, Text, TextProps} from 'react-native';
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import * as themes from '../../constants/themes';

export type CustomLinearGradientProps = {
    colors?: string[]
} & Omit<LinearGradientProps, "colors">

const CustomLinearGradient: React.FC<CustomLinearGradientProps> = ({
  children,
  colors,
  ...props
}) => {
  const defaultColors = [themes.colors.violet, themes.colors.darkPink];
  return (
    <LinearGradient
      colors={ colors || defaultColors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      {...props}>
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;
