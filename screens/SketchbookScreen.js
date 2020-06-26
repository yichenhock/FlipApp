import React, {Component} from 'react';
import { Text, 
    View, 
    TouchableOpacity,
    StyleSheet, 
    Dimensions, 
    Image,
    FlatList
} from 'react-native';

function RingBinder(){
  return(
    <Image
        style={{width:'12%',resizeMode:'contain',alignSelf:'flex-end'}}
        source={require('./images/icons/book-spiral.png')}
    />
  )
}

function SketchItem(){
  return(
    <FlatList/>
  )
}

class App extends Component {
  render() {
    return (
        <View style={styles.container}>

          <View style={{flexDirection:'row', height: 70, width: Dimensions.get('window').width,backgroundColor: 'rgba(77, 107, 103, 1)'}}>

            <TouchableOpacity style={{ marginLeft:20,resizeMode:'contain',alignSelf:'center'}}>
              <Image
                style={{width:20,height:20,resizeMode:'contain',alignSelf:'center'}}
                source={require('./images/icons/arrow-left.png')}
              />
            </TouchableOpacity>

            <Text style={{flex:1, color:'#fff',fontFamily:'Rosario-Bold', fontSize:18, alignSelf:'center', marginLeft:20}}>My Sketches</Text>

            <TouchableOpacity style={{alignSelf:'center'}}>
              <Image
                style={{width:20,height:20,resizeMode:'contain'}}
                source={require('./images/icons/search.png')}
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={{alignSelf:'center', marginRight: 25, marginLeft: 25}}>
              <View style={{flexDirection:'column', height:30, justifyContent:'space-evenly'}}>
                <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
                <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
                <View style={{borderRadius: 400, height: 5, width: 5, backgroundColor: '#fff'}}/>
              </View>

            </TouchableOpacity>
            
          </View>
          
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <FlatList
                data={[{title: 'Title Text', key: 'item1'},{title: 'Thid drawing is cool', key: 'item2'},{title: 'Thidasdfasd', key: 'item3'}]}
                keyExtractor={item => item.key}
                numColumns = {2}
                renderItem={({item, index}) => (
                  <TouchableOpacity>
                    <Text>{item.title}</Text> 
                  </TouchableOpacity>
                )}
              
              />

            </View>

          </View>

            {/* Side ring-binder decoration */}
            <View style={{flexDirection: 'column', width: null, flex:1, justifyContent: 'space-evenly'}}>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
            </View>
          

        </View>
      );
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
      flex: 1, 
      flexDirection:'column'
    }
  
  })

export default App;