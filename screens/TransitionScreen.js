import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import MainScreen from './CameraScreen';
import AboutScreen from './AboutScreen';
import SketchbookScreen from './SketchbookScreen';

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 0 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function Main() {
  return (<MainScreen/>);
  
}

function About() {
  return (<AboutScreen/>);
}

function Sketchbook() {
  return (<SketchbookScreen/>);
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main" tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Sketchbook" component={Sketchbook} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}