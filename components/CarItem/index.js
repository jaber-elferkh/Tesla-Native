import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting At 500$</Text>
      </View>

      <StyledButton
        type="primary"
        content={'Buy Now The Car'}
        onPress={() => {
          console.warn('The Car is Available');
        }}
      />

      <StyledButton
        type="secondary"
        content={'Store'}
        onPress={() => {
          console.warn('The Store is empty');
        }}
      />
    </View>
  );
};

export default CarItem;
