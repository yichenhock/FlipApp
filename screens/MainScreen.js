import * as React from 'react';
import { Text, View} from 'react-native';
import MainScreen from './CameraScreen';
import AboutScreen from './AboutScreen';
// import SketchbookScreen from './SketchbookScreen';

import { NativeRouter, Route, Link } from "react-router-native";

function Home() {
    return (<MainScreen/>);
  }
  
  function About() {
    return (<AboutScreen/>);
  }
  
  export default function App() {
    return (
      <NativeRouter>
        <View style={{
      marginTop: 25,
      padding: 10
    }}>
          <View style={{
      flexDirection: "row",
      justifyContent: "space-around"
    }}>
            <Link to="./CameraScreen" underlayColor="#f0f4f7" style={{
      flex: 1,
      alignItems: "center",
      padding: 10
    }}>
              <Text>Home</Text>
            </Link>
            <Link to="./AboutScreen" underlayColor="#f0f4f7" style={{
      flex: 1,
      alignItems: "center",
      padding: 10
    }}>
              <Text>About</Text>
            </Link>
          </View>
  
          <Route exact path="./CameraScreen" component={Home} />
          <Route path="./AboutScreen" component={About} />
        </View>
      </NativeRouter>
    );
  }

  // const styles = StyleSheet.create({
  //   container: {
  //     marginTop: 25,
  //     padding: 10
  //   },
  //   header: {
  //     fontSize: 20
  //   },
  //   nav: {
  //     flexDirection: "row",
  //     justifyContent: "space-around"
  //   },
  //   navItem: {
  //     flex: 1,
  //     alignItems: "center",
  //     padding: 10
  //   },
  //   subNavItem: {
  //     padding: 5
  //   },
  //   topic: {
  //     textAlign: "center",
  //     fontSize: 15
  //   }
  // });