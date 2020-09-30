import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import NavigationService from "./NavigationService";
import Animated from 'react-native-reanimated';
import CameraScreen from './CameraScreen';
import AboutScreen from './AboutScreen';


// trying something
import { createAppContainer } from 'react-navigation';
import NavigationService from "./NavigationService";
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';

function Camera() {
  // return (<CameraScreen/>);
  return (<View style={{flex: 1}}/>);
}

function About() {
  // return (<AboutScreen/>);
  return (<View style={{flex: 1}}/>);
}

const TopLevelNavigator = createStackNavigator();

function MyStack() {
  return(
    <TopLevelNavigator.Navigator initialRouteName="Camera">
      <StackActions.Screen name = "Camera" component={Camera}/>
    </TopLevelNavigator.Navigator>
  )
}

const AppContainer = createAppContainer(TopLevelNavigator);


export default class App extends React.Component {
  render() {
    return(
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigationRef);
          <MyStack/>
        }}
      />
    );
  }
}

// function MyTabBar({ state, descriptors, navigation, position }) {
//   return (
//     <View style={{ flexDirection: 'row', paddingTop: 0 }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//         // modify inputRange for custom behavior
//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = Animated.interpolate(position, {
//           inputRange,
//           outputRange: inputRange.map(i => (i === index ? 1 : 0)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer ref={navigatorRef => {
//       NavigationService.setTopLevelNavigator(navigationRef);
//       <MyStack/>
//     }}>
//       <Tab.Navigator initialRouteName="Camera" tabBar={props => <MyTabBar {...props} />}>
//         <Tab.Screen name="About" component={About} />
//         <Tab.Screen name="Camera" component={Camera} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
