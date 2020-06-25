/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import {RNCamera} from 'react-native-camera';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="grey" />
        
        <View style={styles.container}>
          {/* <TouchableOpacity 
            style={{
              flex:1,
              alignItems: 'center',
              backgroundColor: 'transparent'
          }}>
            <View
            style={{
              flex:1,
              transform: [{scaleX: -1}] 
          }}>
              <RNCamera
                style={{ 
                  flex: 1, 
                  alignItems: 'center'
                }}
                ref={ref => {
                  this.camera = useRef
                }}
                captureAudio={false}
              >
              </RNCamera>
            </View>

          </TouchableOpacity> */}
          
          <RNCamera
                style={{ 
                  flex: 1, 
                  alignItems: 'center'
                }}
                ref={ref => {
                  this.camera = useRef
                }}
                captureAudio={false}
              >
              </RNCamera>
          {
            this.state.isVisible ?
              <TouchableOpacity style={styles.tutorial} onPress={this.toggleVisible}>
                <View style={{flexDirection: 'column', width:null, alignSelf:'center', backgroundColor:'transparent'}}>
                  <View style={{flexDirection:'row', marginBottom:50}}>
                    <Image
                        style={{height: 120,resizeMode:'contain',marginRight:5}}
                        source={require('./images/icons/double-tap.png')}
                      />
                    <Text style={{width: 200,color:"#fff",fontSize: 20, marginTop: 60}}>
                      Double tap to flip horizontally
                      </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Image
                        style={{height:120, resizeMode:'contain',marginRight:5}}
                        source={require('./images/icons/tap.png')}
                      />
                    <Text style={{width: 200,color:"#fff",fontSize: 20, marginTop: 60}}>
                      Tap and hold to flip horizontally until release
                      </Text>
                  </View>

                </View>
                {/* <Text style={styles.capture} onPress={this.takePicture.bind(this)}>press dis now or else</Text> */}
              </TouchableOpacity>
            :
            null
          }
          
          <View style={{position:'absolute', top:20, left:20}}>
            <Image
              style={{height:30, resizeMode:'contain'}}
              source={require('./images/icons/dots.png')}
            />

          </View>
          
          <View style={{position:'absolute', top:20, right:0}}>
            <Image
              style={{height:30, resizeMode:'contain'}}
              source={require('./images/icons/draw.png')}
            />

          </View>
          
          <View style={{flexDirection: 'row',position:'absolute', width:null, alignSelf:'center', bottom:25}}>
            <Image
              style={{height:30, width:30}}
              source={require('./images/icons/switch-camera.png')}
            />
            <Image
              style={{height:70, width:70}}
              source={require('./images/icons/shutter-on.png')}
            />
            <Image
              style={{height:30, width:30}}
              source={require('./images/icons/split_screen.png')}
            />
          </View>
          
        </View>

        
      
      </View>
    )
  }

  toggleVisible = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}));
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.RNCamera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  flipCamera() {
    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[asdfasdfasdf]</Text>

  }

}

const styles = StyleSheet.create({
  tutorial: {
    backgroundColor: 'rgba(105, 255, 246, 0.5)', 
    position: 'absolute',
    left: 0,
    top: 0, 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    flexDirection: 'column'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }

})

export default App

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar translucent backgroundColor="transparent" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> lmao asdfljwlekjfiwjiejfwe
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
