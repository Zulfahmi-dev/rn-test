import {View, Text, Image, ImageProps, StyleSheet} from 'react-native';
import React from 'react';

type AvatarProps = {
  size?: number;
} & ImageProps;
const Avatar: React.FC<AvatarProps> = ({source, size, style, ...props}) => {
  return (
    <Image
      source={source}
      style={[styles.avatar, {height: size, width: size}, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    objectFit: 'cover',
    borderRadius: 50,
  },
});
export default Avatar;
