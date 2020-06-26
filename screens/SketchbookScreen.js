import React, {Component} from 'react';

import { Text, 
    View, 
    TouchableOpacity,
    StyleSheet, 
    Dimensions, 
    Image
} from 'react-native';

class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Profile!</Text>


            {/* Side ring-binder decoration */}
            <View style={{flexDirection: 'column', width: null}}>
                <Image
                    style={{height:300, width:50,resizeMode:'contain',alignSelf:'flex-end'}}
                    source={require('./images/icons/book-spiral.png')}
                />
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
      flex: 1
    }
  
  })

export default App;