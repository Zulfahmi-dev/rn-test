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
import {useNavigation} from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewPager, {PagerViewOnPageSelectedEvent} from 'react-native-pager-view';

import {Typography, Input} from '../../components';
import {colors, sizes} from '../../constants/themes';
import UserItem from './components/user-item';
import ActiveFriends from './data/active-friends.json';
import FavoriteFriends from './data/favorite-friends.json';
import TabbarItem from './components/tabbar-item';
import TabFriends from './tab-friends';
import TabExplore from './tab-explore';
import TabRequests from './tab-request';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const SECTIONS = [
  {
    title: 'Favorite',
    friends: FavoriteFriends,
    icon: <Icon name="star-outline" size={sizes.icon} color={colors.gray} />,
  },
  {
    title: 'Friends',
    friends: ActiveFriends,
    icon: <Icon name="people-outline" size={sizes.icon} color={colors.gray} />,
  },
];

const FriendsScreen: React.FC = props => {
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0);
  const tabRef = useRef<ViewPager>(null)

  const onChangeTab = (event: PagerViewOnPageSelectedEvent) => {
    const position = event.nativeEvent.position;
    setCurrentActiveTab(position);
  };

  return (
    <View style={styles.container}>
      <View style={{padding: sizes.padding, paddingBottom: sizes.sm*3}}>
        <Input
          style={styles.searchBar}
          placeholder="search keyword"
          rightIcon={
            <Icon
              name="search-outline"
              size={sizes.icon}
              color={colors.violet}
            />
          }
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TabbarItem
            label="Friends"
            isActive={currentActiveTab == 0}
            onPress={() => tabRef.current?.setPage(0)}
          />
          <TabbarItem
            label="Explore"
            isActive={currentActiveTab == 1}
            onPress={() => tabRef.current?.setPage(1)}
          />
          <TabbarItem
            label="Request"
            isActive={currentActiveTab == 2}
            onPress={() => tabRef.current?.setPage(2)}
          />
          <TabbarItem
            label="Squad"
            isActive={currentActiveTab == 3}
            onPress={() => tabRef.current?.setPage(3)}
          />
        </ScrollView>
      </View>

      <View style={{flex: 1}}>
        <ViewPager
        ref={tabRef}
          style={{flex: 1}}
          initialPage={currentActiveTab}
          onPageSelected={onChangeTab}>
          <View key="1">
            <TabFriends />
          </View>
          <View key="2">
            <TabExplore />
          </View>
          <View key="3">
            <TabRequests />
          </View>
        </ViewPager>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    paddingTop: sizes.base,
    paddingBottom: sizes.base,
  },
  searchBar: {
    backgroundColor: colors.darkGray,
    borderRadius: sizes.radius,
    height: 40,
  },
  tabBarItem: {
    width: screenWidth / 2.5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: sizes.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendsScreen;
