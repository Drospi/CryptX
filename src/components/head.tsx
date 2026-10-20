import { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export class HeadComponent extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Crypt<Text style={styles.textX}>X</Text></Text>
        <Image source={require('../images/flor.png')} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
    },
    text: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#fff',
    },
    textX: {
        color: '#6552FE',
    },
    image: {
        width: 366,
        height: 366,
        alignSelf: 'flex-end',
    },

});


export default HeadComponent