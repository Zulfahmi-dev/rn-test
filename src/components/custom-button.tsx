import {
  View,
  Text,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {} from 'react-native-gesture-handler';
import {sizes} from '../../constants/themes';
import CustomLinearGradient from './linear-gradient';
import Typography from './typography';

type ButtonProps = {
  label?: string;
  labelStyle?: TextStyle
  colors?: string[];
  containerStyle?: ViewStyle
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  label,
  labelStyle,
  style,
  containerStyle,
  colors,
  children,
  ...props
}) => {
  if (colors && colors?.length) {
    return (
      <CustomLinearGradient colors={colors} style={[{borderRadius:sizes.radius}, containerStyle]}>
        <TouchableOpacity style={[styles.button, style]} {...props}>
          {label ? <Typography title center medium style={labelStyle}>{label}</Typography> : children}
        </TouchableOpacity>
      </CustomLinearGradient>
    );
  }

  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {label ? <Typography title center medium style={labelStyle}>{label}</Typography> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: sizes.radius,
    paddingBottom: sizes.sm,
    paddingTop: sizes.sm,
    borderWidth:0
  },
});
export default Button;
