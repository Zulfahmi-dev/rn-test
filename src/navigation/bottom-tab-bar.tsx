import {useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors, sizes} from '../constants/themes';

import FriendsScreen from '../screens/friends';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import SettingBottomSheet from './components/setting-bottom-sheet';
import NightLifeScreen from '../screens/nightlife';
import EventScreen from '../screens/event';

const Tab = createBottomTabNavigator();

const MyBottomTabBar = () => {
  const settingRef = useRef<BottomSheetModal>(null);
  return (
    <>
      <Tab.Navigator
        initialRouteName="friends"
        screenOptions={({route}) => ({
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerTitleStyle: {
            textTransform: 'capitalize',
          },
          headerRight: () => (
            <TouchableOpacity
              style={{padding: sizes.base}}
              onPress={() => settingRef.current?.present()}>
              <AntDesignIcon name="setting" size={20} color={colors.white} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'nightlife') {
              iconName = 'moon';
            } else if (route.name === 'event') {
              iconName = 'moon';
            } else if (route.name === 'friends') {
              iconName = 'users';
            } else if (route.name === 'profile') {
              iconName = 'user-alt';
            }

            return <Icon name={iconName} size={sizes.icon} color={color} />;
          },
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray,
          tabBarIconStyle: {
            height: 20,
            width: 20,
          },
          tabBarLabelStyle: {
            fontSize: sizes.caption,
            textTransform: 'capitalize',
            fontWeight: '500',
          },
          tabBarItemStyle: {
            padding: sizes.base,
          },
          tabBarStyle: {
            backgroundColor: colors.black,
            height: 80,
            borderTopWidth: 0,
          },
        })}>
        <Tab.Screen name="nightlife" component={NightLifeScreen} />
        <Tab.Screen name="event" component={EventScreen} />
        <Tab.Screen name="friends" component={FriendsScreen} />
        <Tab.Screen name="profile" component={FriendsScreen} />
      </Tab.Navigator>
      <SettingBottomSheet bottomSheetRef={settingRef} />
    </>
  );
};

export default MyBottomTabBar;
