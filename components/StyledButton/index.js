import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === 'primary' ? 'white' : 'black';
  const textColor = type === 'primary' ? 'black' : 'white';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
