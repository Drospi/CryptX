import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class DescriptionComponent extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Jump start your crypto portfolio</Text>
        <Text style={styles.description}>Take your investment portfolio to the next level</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'light',
    },
});

export default DescriptionComponent