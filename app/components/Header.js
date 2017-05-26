import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Icon name="ios-close" size={35} color="#a8a9ad" />
      <Text style={{ fontSize: 18 }}>Shopping Cart</Text>
      <Text>Empty</Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    flex: 0.4,
    elevation: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};

export default Header;
