// just copy this code from the driving repo :)
import React, {Component} from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

import * as themes from '../../constants/themes';


const {colors} = themes;

export type TypographyProps = {
  h1?: unknown;
  h2?: unknown;
  h3?: unknown;
  title?: unknown;
  body?: unknown;
  caption?: unknown;
  small?: unknown;
  size?: unknown;
  transform?: unknown;
  align?: unknown;

  // styling
  regular?: unknown;
  bold?: unknown;
  semibold?: unknown;
  medium?: unknown;
  weight?: unknown;
  light?: unknown;
  center?: unknown;
  right?: unknown;
  spacing?: unknown; // letter-spacing
  height?: unknown; // line-height

  // colors
  color?: any;
  black?: unknown;
  white?: unknown;
  gray?: unknown;
} & TextProps;

const Typography: React.FC<TypographyProps> = props => {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    black,
    white,
    gray,
    style,
    children,
    ...dataProps
  } = props;

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,

    size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && {color},
    // color shortcuts
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    style, // rewrite predefined styles
  ];

  return (
    <Text style={textStyles} {...dataProps}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: themes.sizes.font,
    color: themes.colors.black,
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '100',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  red: {color: themes.colors.red},
  black: {color: themes.colors.black},
  white: {color: themes.colors.white},
  gray: {color: themes.colors.gray},
  // fonts
  h1: themes.fonts.h1,
  h2: themes.fonts.h2,
  h3: themes.fonts.h3,
  title: themes.fonts.title,
  body: themes.fonts.body,
  caption: themes.fonts.caption,
});
