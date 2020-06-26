import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

class App extends Component {
    render(){
        return(
            <View style={styles.about}>

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

            {/* <Image
                style={{position:'absolute', width:30, height: 30, resizeMode:'contain', marginBottom:30, alignSelf:'flex-end', bottom: 0, right: 30}}
                source={require('./images/icons/close.png')}
            /> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    
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
    }
  
  })

  
export default App;