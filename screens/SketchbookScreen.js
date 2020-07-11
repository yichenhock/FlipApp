import React, {Component} from 'react';
import { Text, 
    View, 
    TouchableOpacity,
    StyleSheet, 
    Dimensions, 
    Image,
    FlatList, 
    StatusBar
} from 'react-native';

function RingBinder(){
  return(
    <Image
        style={{width:40,resizeMode:'contain',alignSelf:'flex-end'}}
        source={require('./images/icons/book-spiral.png')}
    />
  )
}

function BottomSpace(){
  return(
    <View style={{
      backgroundColor: 'transparent', 
      height: (Dimensions.get('screen').height - Dimensions.get('window').height - StatusBar.currentHeight)*1.2, 
      width: null
    }}>
    </View> 
  )
}

function SketchItem({item, index}){
  return(
    <TouchableOpacity style={{flex:0.5, marginTop:30}}>
      <View style={{alignSelf: 'center',borderRadius: 5,borderWidth:3, borderColor: 'rgba(77, 107, 103, 1)', height: 150, width: 150}}/>
      <Text style={{textAlign: 'center',fontFamily:'Rosario-Regular', color:'rgba(77, 107, 103, 1)'}}>{item.title}</Text> 
    </TouchableOpacity>
  )
  
}

class App extends Component {
  render() {
    return (
        <View style={styles.container}>

          <View style={{flexDirection:'row', height: 70, width: Dimensions.get('window').width,backgroundColor: 'rgba(77, 107, 103, 1)'}}>

            <TouchableOpacity style={{ marginLeft:20,resizeMode:'contain',alignSelf:'center'}}>
              <Image
                style={{width:15,height:15,resizeMode:'contain',alignSelf:'center'}}
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
            <View style={{flex:1, flexDirection:'column'}}>
              <FlatList
                data={[
                  {title: 'Title Text', key: 0},
                  {title: 'Thid drawing is as e  f w e erwer e w wee', key: 1},
                  {title: 'Thidasdfasd', key: 2},
                  {title: 'Thidasdfasd', key: 3},
                  {title: 'Thidasdfasd', key: 4},
                  {title: 'Thidasdfasd', key: 5},
                  {title: 'Thidasdfasd', key: 6},
                  {title: 'Thidasdfasd', key: 7},
                  {title: 'Thidasdfasd', key: 8},
                  {title: 'Thidasdfasd', key: 9},
                  {title: 'Thidasdfasd', key: 10},
                  {title: 'Thidasdfasd', key: 11},
                  {title: 'Thidasdfasd', key: 12}
                ]}
                keyExtractor={item => item.key}
                numColumns = {2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => <SketchItem item={item} index={index} /> }
                ListFooterComponent = {<View style={{height:100}}/>}
              
              />

            </View>
            {/* Side ring-binder decoration */}
            <View style={{flexDirection: 'column', width: null, justifyContent: 'space-around'}}>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <RingBinder/>
                <View style={{
                  backgroundColor: 'transparent', 
                  height: (Dimensions.get('screen').height - Dimensions.get('window').height - StatusBar.currentHeight)*1.2, 
                  width: null
                }}>
    </View> 
            </View>
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
      flexDirection:'column', 
      backgroundColor:'#fff'
    }
  
  })

export default App;