import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from 'react-native';
import Text from './typography';
import {colors, sizes} from '../constants/themes';

type InputProps = {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  labelStyle?: TextStyle;
} & TextInputProps;

const Input: React.FC<InputProps> = ({style, ...props}) => {
  const renderIcon = () => {
    if (!props.icon) {
      return null;
    }

    return (
      <View style={styles.icon}>
        {/* {props.icon} */}
        {props.icon}
      </View>
    );
  };

  const renderRightIcon = () => {
    if (!props.rightIcon) {
      return null;
    }

    return (
      <View style={styles.rightIcon}>
        {/* {props.icon} */}
        {props.rightIcon}
      </View>
    );
  };

  const renderLabel = () => {
    if (!props.label) {
      return null;
    }

    return (
      <View style={styles.label}>
        <Text style={props?.labelStyle}>{props.label}</Text>
      </View>
    );
  };

  return (
    <>
      {renderLabel()}
      <View style={styles.input}>
        {renderIcon()}
        <TextInput
          style={[
            {
              paddingLeft: props.icon ? 45 : sizes.base,
              paddingRight: props.icon ? 45 : sizes.base,
            },
            style,
          ]}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.gray}
          {...props}
        />
        {renderRightIcon()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    padding: 5,
    // backgroundColor:colors.blue,
    left: 5,
    zIndex: 999999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    padding: 5,
    // backgroundColor: colors.white,
    zIndex: 999999,
  },
  label: {
    flex: 0.3,
    justifyContent: 'center',
    marginBottom: 5,
  },
});

export default Input;
