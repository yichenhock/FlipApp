import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated
} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import GL from "gl-react";
import Modal from 'react-native-modalbox';
import { useNavigation } from '@react-navigation/native';
// import{Grayscale} from 'react-native-color-matrix-image-filters';
// import GrayscaleShader from './GrayscaleShader';
// const window = Dimensions.get('window');
// const navigationRef = React.createRef();


// function goToScreen (screenName){
//   const navigation = useNavigation();
//   return(
//     <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate(screenName)}>
//       <Image
//         style={{height:40, width: 40, resizeMode:'contain', marginTop:5}}
//         source={require('./images/icons/book.png')}
//       />
//     </TouchableOpacity>
//   );
  
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true, 
      isFlipped: false,
      flippedAnimatedValue: new Animated.Value(0), 
      lastPressed: new Date(), 
      doubleTap: false,
      cameraType: 'back'
    }
    this.animated = new Animated.Value(0); 

    //Flip X
    var inputRange = [0,1], outputRange=[1,-1];
    this.scaleX = this.animated.interpolate({inputRange,outputRange});
  }
  
  toggleVisible = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}));
  }
  
  flipAnimation = (val) => {
    Animated.timing(this.animated,{
      toValue: val,
      duration:1,
      useNativeDriver:false
    }).start();
  }

  flipOnPress = () => {
    var diff = (new Date() - this.state.lastPressed)/1000;

    if (diff <= 0.5){ //double tap
      this.setState(prevState => ({doubleTap: true}));
      console.log("double tap!")
      if (this.state.isFlipped){
        this.flipAnimation(0);
      } else {
        this.flipAnimation(1);
      }
      this.setState(prevState => ({isFlipped: !prevState.isFlipped}));

    } else { //single tap
      if (this.state.isFlipped){
        this.flipAnimation(0);
      } else {
        this.flipAnimation(1);
      }
    }
    this.setState(prevState => ({lastPressed: new Date()}));
  }

  flipOnRelease = () => {
    if (this.state.doubleTap){
      this.setState(prevState => ({doubleTap: false}));
    } else {
      if (this.state.isFlipped){
        this.flipAnimation(1);
      } else {
        this.flipAnimation(0);
      }
    }
    
  }

  switchCamera = () => {
    if (this.state.cameraType == "back"){
      this.setState(prevState => ({cameraType: "front"}));
    } else {
      this.setState(prevState => ({cameraType: "back"}));
    }
    console.log(this.state.cameraType)
  }

  render(){
    const transform = [{scaleX: this.scaleX}];
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" />
        
        <View style={styles.container}>
            <Animated.View style= {[{flex:1},{transform}]}>
              
              <RNCamera
                style={{flex: 1}}
                ref={ref => {
                  this.camera = useRef
                }}
                captureAudio={false}
                type = {this.state.cameraType}
              />
              
            </Animated.View>

            <TouchableOpacity
              style={{
                left: 0,
                top: 0, 
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,position:'absolute'}} 
              
              onPressIn={this.flipOnPress}
              onPressOut={this.flipOnRelease}
              >
                
              </TouchableOpacity>
          
          <View style={{position:'absolute', marginTop:20}}>
            <TouchableOpacity style={{alignSelf:'center', paddingHorizontal:25}} >
                <View style={{flexDirection:'column', height:30, justifyContent:'space-evenly'}}>
                  <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
                  <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
                  <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
                </View>

              </TouchableOpacity>
          </View>
          
          {/* <Modal
            style={{height:40}}

          > //////onPress= {() => this.refs.modal1.open()}
            <View/>
          </Modal> */}

          
          <View style={{position:'absolute', marginTop:15, alignSelf:'flex-end'}}>
            <TouchableOpacity>
              <Image
                style={{width:40, height: 40, resizeMode: 'contain',marginRight:15}}
                source={require('./images/icons/bw.png')}
              />
            </TouchableOpacity>
          </View>
          
          <View style={{flexDirection: 'row', width: Dimensions.get('window').width, position:'absolute', alignSelf:'center', bottom:25, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{alignSelf:'center'}}>
              <Image
                style={{height:40, width: 40, resizeMode:'contain'}}
                source={require('./images/icons/draw.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{alignSelf:'center'}}
            onPress = {this.switchCamera}
            >
              <Image
              style={{height:40, width: 40, resizeMode:'contain'}}
              source={require('./images/icons/switch-camera.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center'}}>
              <Image
                style={{height:70, width:70}}
                source={require('./images/icons/shutter.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center'}}>
              <Image
                style={{height:40, width: 40, resizeMode:'contain'}}
                source={require('./images/icons/split-screen.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={() => useNavigation().navigate('Sketchbook')}>
              <Image
                style={{height:40, width: 40, resizeMode:'contain', marginTop:5}}
                source={require('./images/icons/book.png')}
              />
            </TouchableOpacity>
          </View>

          {
            this.state.isVisible ?
              <TouchableOpacity style={styles.tutorial} onPress={this.toggleVisible}>
                <View style={{flexDirection: 'column', width:null, alignSelf:'center', backgroundColor:'transparent'}}>
                  <View style={{flexDirection:'row', marginBottom:50}}>
                    <Image
                        style={{height: 100,resizeMode:'contain',marginRight:5}}
                        source={require('./images/icons/double-tap.png')}
                      />
                    <Text style={{width: 200,color:"#fff",fontSize: 24, fontFamily:"Rosario-Regular", alignSelf:'center'}}>
                    <Text style={{fontFamily:"Rosario-Bold"}}>Double tap</Text> to flip horizontally
                      </Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Image
                        style={{height:100, resizeMode:'contain',marginRight:5}}
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
      </View>
    )
    

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

  container: {
    flex: 1
  }

})

export default App;