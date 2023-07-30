import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Typography, Input, Avatar} from '../../../components';
import {colors, sizes} from '../../../constants/themes';
import OptionBottomSheet from './option-bottom-sheet';
import DetailBottomSheet from './detail-bottom-sheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

type UserItemProps = {
  item: any;
};

const UserItem: React.FC<UserItemProps> = ({item, ...props}) => {
  const optionRef = useRef<BottomSheetModal>(null);
  const detailRef = useRef<BottomSheetModal>(null);
  const [detail, setDetail] = useState<any>();

  const openDetail = () => {
    setDetail(item);
    detailRef.current?.present();
  };

  return (
    <>
      <Pressable onPress={openDetail}>
        <View style={styles.contactItem}>
          <Avatar
            source={{
              uri: item.photo_profile,
            }}
            size={52}
            style={styles.avatar}
          />
          <View>
            <Typography body white>
              {item.name}
            </Typography>
            <Typography caption gray>
              {item.caption}
            </Typography>
          </View>

          <TouchableOpacity
            style={{marginLeft: 'auto', padding: sizes.base, paddingRight: 0}}
            onPress={() => optionRef.current?.present()}>
            <Icon
              name="ellipsis-horizontal-sharp"
              size={sizes.icon}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
      <OptionBottomSheet bottomSheetRef={optionRef} />
      <DetailBottomSheet bottomSheetRef={detailRef} data={detail} />
    </>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    paddingTop: sizes.sm,
    paddingBottom: sizes.sm,
  },
  avatar: {
    marginRight: sizes.sm,
  },
});

export default React.memo(UserItem);
