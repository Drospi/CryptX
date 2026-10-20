import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ButtonComponent extends Component {
  render() {
    return (
      <View style={styles.vista}>
        <View style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    vista: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 40,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6552FE',
    },
    
    text: {
        fontSize: 20,
        color: '#fff',
    },

});

export default ButtonComponent