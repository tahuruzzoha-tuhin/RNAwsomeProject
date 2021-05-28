import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ColorBox = props => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.textColor}>
        {' '}
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'italic',
  },

  box: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },

  cyan: {
    backgroundColor: '#2aa198',
  },
});
export default ColorBox;
