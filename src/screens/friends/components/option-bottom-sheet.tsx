import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {
  PropsWithChildren,
  Ref,
  useCallback,
  useMemo,
  useState,
} from 'react';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {colors, sizes} from '../../../constants/themes';
import {CustomBottomSheet, Typography} from '../../../components';

type OptionBottomSheetProps = {
  bottomSheetRef: Ref<BottomSheetModal>;
};

const OptionBottomSheet: React.FC<OptionBottomSheetProps> = ({
  bottomSheetRef,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean[]>([]);

  return (
    <CustomBottomSheet bottomSheetRef={bottomSheetRef} title="More option">
      <View style={styles.rowItem}>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon
            name="hand-grab-o"
            color={'white'}
            size={sizes.icon}
          />
        </View>
        <Typography white title medium>Invite to Party</Typography>
      </View>
      <View style={styles.rowItem}>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon
            name="hand-grab-o"
            color={'white'}
            size={sizes.icon}
          />
        </View>
        <Typography white title medium>Friendship</Typography>
      </View>
      <View style={styles.rowItem}>
        <View style={styles.containerIcon}>
          <FontAwesomeIcon
            name="star-o"
            color={'white'}
            size={sizes.icon}
          />
        </View>
        <Typography white title medium>Set Favourites</Typography>
      </View>
      <View style={styles.rowItem}>
        <View style={styles.containerIcon}>
          <IonIcons
            name="lock-closed-outline"
            color={'white'}
            size={sizes.icon}
          />
        </View>
        <Typography white title medium>Block</Typography>
      </View>
      <View style={styles.rowItem}>
        <View style={styles.containerIcon}>
          <IonIcons
            name="trash-bin-outline"
            color={'white'}
            size={sizes.icon}
          />
        </View>
        <Typography white title medium>Remove</Typography>
      </View>
    </CustomBottomSheet>
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
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.base,
    paddingBottom: sizes.base,
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
  },
  containerIcon: {
    marginRight: sizes.base,
  },
});

export default OptionBottomSheet;
