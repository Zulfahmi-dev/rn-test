import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {
  PropsWithChildren,
  Ref,
  useCallback,
  useMemo,
  useState,
} from 'react';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors, sizes} from '../../constants/themes';
import LinearGradient from 'react-native-linear-gradient';
import {
  CustomBottomSheet,
  GradientText,
  Typography,
} from '../../components';
import CustomLinearGradient from '../../components/linear-gradient';

type SettingBottomSheetProps = {
  bottomSheetRef: Ref<BottomSheetModal>;
};

const SettingBottomSheet: React.FC<SettingBottomSheetProps> = ({
  bottomSheetRef,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean[]>([]);
  const toggleSwitch = (index: number) => {
    let oldState = [...isEnabled];
    oldState[index] = !oldState[index];
    setIsEnabled(oldState);
  };

  return (
    <CustomBottomSheet bottomSheetRef={bottomSheetRef} title="Profile security">
      <View style={styles.container}>
        <Typography white h3 bold>
          Privacy Setting
        </Typography>
        <View style={styles.rowItem}>
          <Typography white>Allow other find me in explore</Typography>
          <Switch
            trackColor={{false: colors.black, true: colors.violet}}
            thumbColor={isEnabled[0] ? colors.darkPink : 'white'}
            ios_backgroundColor={colors.black}
            onValueChange={() => toggleSwitch(0)}
            value={isEnabled[0]}
          />
        </View>
        <View style={styles.rowItem}>
          <Typography white>Share our nickname</Typography>
          <Switch
            trackColor={{false: colors.black, true: colors.violet}}
            thumbColor={isEnabled[1] ? colors.darkPink : 'white'}
            ios_backgroundColor={colors.black}
            onValueChange={() => toggleSwitch(1)}
            value={isEnabled[1]}
          />
        </View>

        <View style={styles.rowItem}>
          <Typography white>Allow everyone invite me</Typography>
          <Switch
            trackColor={{false: colors.black, true: colors.violet}}
            thumbColor={isEnabled[2] ? colors.darkPink : 'white'}
            ios_backgroundColor={colors.black}
            onValueChange={() => toggleSwitch(2)}
            value={isEnabled[2]}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    borderRadius: sizes.radius,
    padding: sizes.base,
  },
  title: {fontSize: sizes.title, fontWeight: '700', textAlign: 'center'},
  body: {
    flex: 1,
    backgroundColor: colors.darkGray,
    width: '100%',
    marginTop: sizes.base,
    borderRadius: sizes.radius,
    padding: sizes.base,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.base / 2,
  },
});

export default SettingBottomSheet;
