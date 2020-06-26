import React, {Component, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking, 
  ActivityIndicator
} from 'react-native';

import {RNCamera} from 'react-native-camera';
  
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true, 
      isFlipped: false
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" />
        
        <View style={styles.container}>
          {this.state.isFlipped ?
            <TouchableOpacity style={styles.container} onPress={this.toggleFlip}>
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
          </TouchableOpacity>

          :
          
          <TouchableOpacity style={styles.container} onPress={this.toggleFlip}>
            <View
            style={{
              flex:1,
              transform: [{scaleX: 1}] 
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
          </TouchableOpacity>
          
          }

          
          <View style={{position:'absolute', marginTop:20, marginLeft:15}}>
            <Image
              style={{height:20, resizeMode:'contain'}}
              source={require('./images/icons/dots.png')}
            />

          </View>
          
          <View style={{position:'absolute', marginTop:15, alignSelf:'flex-end'}}>
            <Image
              style={{width:30, height: 30, resizeMode: 'contain',marginRight:15}}
              source={require('./images/icons/draw.png')}
            />

          </View>
          
          <View style={{flexDirection: 'row',position:'absolute', width:null, alignSelf:'center', bottom:25}}>
            <Image
              style={{height:30, width: 70, resizeMode:'contain', alignSelf:'center'}}
              source={require('./images/icons/switch-camera.png')}
            />
            <Image
              style={{height:70, width:70, marginLeft: 10, marginRight:10}}
              source={require('./images/icons/shutter.png')}
            />
            <Image
              style={{height:30, width: 70, resizeMode:'contain', alignSelf:'center'}}
              source={require('./images/icons/split-screen.png')}
            />
          </View>

          {
            this.state.isVisible ?
              <TouchableOpacity style={styles.tutorial} onPress={this.toggleVisible}>
                <View style={{flexDirection: 'column', width:null, alignSelf:'center', backgroundColor:'transparent'}}>
                  <View style={{flexDirection:'row', marginBottom:50}}>
                    <Image
                        style={{height: 120,resizeMode:'contain',marginRight:5}}
                        source={require('./images/icons/double-tap.png')}
                      />
                    <Text style={{width: 200,color:"#fff",fontSize: 24, fontFamily:"Rosario-Regular", alignSelf:'center'}}>
                    <Text style={{fontFamily:"Rosario-Bold"}}>Double tap</Text> to flip horizontally
                      </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Image
                        style={{height:120, resizeMode:'contain',marginRight:5}}
                        source={require('./images/icons/tap.png')}
                      />
                    <Text style={{width: 200,color:"#fff",fontSize: 24, fontFamily:"Rosario-Regular", alignSelf:'center'}}>
                    <Text style={{fontFamily:"Rosario-Bold"}}>Tap and hold</Text> to flip horizontally until release
                      </Text>
                  </View>

                </View>
              </TouchableOpacity>
            :
            null
          }
          
        </View>

        {/* <View style={styles.about}>

          <View style ={{flexDirection:'column', alignSelf:'center'}}>
            <Image
              style={{height:150, width:300, resizeMode:'contain'}}
              source={require('./images/logo.png')}
            />
            <Text style={{width: 300,color:"#fff",fontSize: 24, fontFamily:"Rosario-Regular",alignSelf:'center', marginTop:50}}>
            <Text style={{fontFamily:"Rosario-Bold"}}>FLIP CAM: for artists</Text> is designed for traditional artists to conveviently flip their drawings horizontally in real time. 
            </Text>
            <Text style={{width: 300,color:"#fff",fontSize: 24, fontFamily:"Rosario-Regular", alignSelf:'center', marginTop:20}}>
              Made by <Text style={{fontFamily:"Rosario-Bold"}}>Yi Chen Hock</Text>.
            </Text>
          </View> 

          <TouchableOpacity
            style={{width: null, alignSelf:'center', marginTop:50}}
            onPress={() => Linking.openURL('https://ko-fi.com/chen_dll')}
          >
            <Image
                style={{height:50, width:300,resizeMode:'contain'}}
                source={require('./images/icons/kofi.png')}
              />
          </TouchableOpacity>
          

          <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/chen_dll/')}>
              <Image
                  style={{height:50, width:50,resizeMode:'contain', alignSelf:'center', marginRight: 20}}
                  source={require('./images/icons/ig.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/chen_dll')}>
              <Image
                style={{height:50, width:50,resizeMode:'contain', alignSelf:'center', marginLeft:20}}
                source={require('./images/icons/twitter.png')}
              />
            </TouchableOpacity>
            
          </View> 

          <Image
            style={{position:'absolute', width:30, height: 30, resizeMode:'contain', marginBottom:30, alignSelf:'flex-end', bottom: 0, right: 30}}
            source={require('./images/icons/close.png')}
          />

        </View> */}
        
      
      </View>
    )
    

  }

  toggleVisible = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}));
  }
  
  toggleFlip = () => {
    this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.RNCamera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }


}

const styles = StyleSheet.create({
  tutorial: {
    backgroundColor: 'rgba(77, 107, 103, 0.5)', 
    position: 'absolute',
    left: 0,
    top: 0, 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  
  about: {
    backgroundColor: 'rgba(77, 107, 103, 1)', 
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
    flex: 1
    // flexDirection: 'column'
  }

})

export default App;