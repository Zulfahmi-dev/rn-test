import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Typography} from '../../../components';
import {colors, sizes} from '../../../constants/themes';
import DetailBottomSheet from './detail-bottom-sheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

type ExploreItemProps = {
  item: any;
};
const ExploreItem: React.FC<ExploreItemProps> = ({item, ...props}) => {
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
          <Image
            source={{
              uri: item.photo_profile,
            }}
            style={styles.avatar}
          />
          <View style={styles.body}>
            <View style={styles.row}>
              <Typography body white medium>
                {item.name}
              </Typography>
              <Typography caption gray>
                {item.age}
              </Typography>
            </View>
            <View>
              <Typography gray caption>
                {item.bio}
              </Typography>
            </View>
          </View>
        </View>
      </Pressable>
      <DetailBottomSheet bottomSheetRef={detailRef} data={detail} />
    </>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    alignItems: 'center',
    width: screenWidth / 2.26,
    marginBottom: sizes.padding
  },
  avatar: {
    height: (screenWidth / 2.26) * 1.2,
    width: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  body: {
    padding: 12,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: sizes.sm
  }
});

export default React.memo(ExploreItem);
