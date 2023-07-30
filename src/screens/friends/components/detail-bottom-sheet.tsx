import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {Ref, useState} from 'react';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';

import {colors, sizes} from '../../../constants/themes';
import {
  Avatar,
  CustomBottomSheet,
  CustomButton,
  Typography,
} from '../../../components';

type DetailBottomSheetProps = {
  bottomSheetRef: Ref<BottomSheetModal>;
  data: any;
};

const DetailBottomSheet: React.FC<DetailBottomSheetProps> = ({
  bottomSheetRef,
  data,
  ...props
}) => {
  return (
    <CustomBottomSheet
      bottomSheetRef={bottomSheetRef}
      title="Profile"
      snapPoints={['70%', '70%']}>
      <View style={styles.header}>
        <Avatar source={{uri: data?.photo_profile}} size={80} />

        <Typography title white style={{marginTop: sizes.sm}}>
          {data?.name}
        </Typography>

        <Typography body gray>
          {data?.age} | {data?.email}
        </Typography>
      </View>

      <View>
        <View style={styles.card}>
          <Typography gray>{data?.bio}</Typography>
        </View>

        <View style={[styles.card, styles.row, {marginBottom:0}]}>
          <View style={{position: 'relative', marginRight: sizes.base * 2}}>
            <Avatar source={{uri: data?.photo_profile}} size={30} />
            <Avatar
              source={{uri: data?.photo_profile}}
              size={30}
              style={{
                position: 'absolute',
                left: 25,
                borderWidth: 1,
                borderColor: colors.violet,
              }}
            />
          </View>
          <Typography gray body>
            Michi and 3 other also in her friendship
          </Typography>
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <CustomButton
          label="Set as Favorites"
          labelStyle={{
            color: 'white',
          }}
          colors={[colors.violet, colors.darkPink]}
          containerStyle={{marginBottom: sizes.sm}}
        />
        <CustomButton
          label="Block"
          labelStyle={{
            color: 'white',
          }}
          style={{borderColor: 'white', borderWidth: 1}}
        />
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
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  card: {
    backgroundColor: colors.darkGray,
    borderRadius: sizes.radius,
    padding: 12,
    marginBottom: 12
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DetailBottomSheet;
