import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {
  PropsWithChildren,
  Ref,
  useCallback,
  useMemo,
  useState,
} from 'react';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import {colors, sizes} from '../../constants/themes';
import LinearGradient from 'react-native-linear-gradient';
import {GradientText, Typography} from '../../components';
import CustomLinearGradient from '../../components/linear-gradient';
import {ViewProps} from 'react-native';

export type CustomBottomSheetProps = {
  bottomSheetRef: Ref<BottomSheetModal>;
  title: string;
  snapPoints?: string[] | number[];
} & Omit<BottomSheetProps, 'snapPoints'> &
  ViewProps;

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  bottomSheetRef,
  snapPoints,
  title,
  children,
  ...props
}) => {
  const defaultSnapPoints = useMemo(() => ['50%', '50%'], []);
  return (
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints || defaultSnapPoints}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: colors.black,
          elevation: 5,
        }}
        handleIndicatorStyle={{backgroundColor: colors.gray}}
        {...props}>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <GradientText style={styles.title}>{title}</GradientText>
          </View>
          <View style={styles.body}>{children}</View>
        </View>
      </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.base,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: sizes.title, fontWeight: '700', textAlign: 'center'},
  body: {
    flex: 1,
    width: '100%',
    marginTop: sizes.base,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.base / 2,
  },
});

export default CustomBottomSheet;
