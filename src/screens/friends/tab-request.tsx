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

import {Typography, Input} from '../../components';
import {colors, sizes} from '../../constants/themes';
import UserItem from './components/user-item';
import ActiveFriends from './data/active-friends.json';
import FavoriteFriends from './data/favorite-friends.json';
import RequestItem from './components/request-item';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const SECTIONS = [
  {
    title: 'Sent Request',
    friends: FavoriteFriends,
    icon: <Icon name="star-outline" size={sizes.icon} color={colors.gray} />,
    type:'sent'
  },
  {
    title: 'Received Request',
    friends: ActiveFriends,
    icon: <Icon name="people-outline" size={sizes.icon} color={colors.gray} />,
    type:'approve'
  },
];

const TabRequests: React.FC = props => {
  const [activeSections, setActiveSections] = useState<any>([]);

  const renderHeader = (section: any) => {
    return (
      <View
        style={[
          styles.contactItem,
          {padding: sizes.base, backgroundColor: colors.darkGray},
        ]}>
        {section.icon}
        <Typography
          white
          title
          style={{marginLeft: sizes.base, marginRight: 'auto'}}>
          {`${section.title} (${section.friends?.length})`}
        </Typography>
        <Icon
          name={
            SECTIONS[activeSections] &&
            SECTIONS[activeSections].title == section.title
              ? 'caret-up-outline'
              : 'caret-down'
          }
          size={sizes.icon}
          color={colors.gray}
        />
      </View>
    );
  };

  const renderContent = (section: any) => {
    return (
      <ScrollView
        style={{height: screenHeight * 0.48}}
        showsVerticalScrollIndicator={false}>
        <View style={{padding: sizes.padding, paddingTop: sizes.sm}}>
          {section.friends?.map((item: any, i: number) => (
            <RequestItem isSent={section.type=='sent'} item={item} key={i} />
          ))}
        </View>
      </ScrollView>
    );
  };

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <View>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
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

export default TabRequests;
