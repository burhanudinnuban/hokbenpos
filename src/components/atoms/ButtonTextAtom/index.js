import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button as Btn,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../themes';

const ButtonTextAtom = ({title, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTextAtom;

const styles = StyleSheet.create({
  text: color => ({
    fontSize: 16,
    color: color ? color : colors.primary,
  }),
});
