import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Theme} from './Theme';

const Loader = ({visible = false, msg}) => {
  const {height, width} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.contianer, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={Theme.primary} />
          <Text
            style={{
              marginRight: 10,
              fontSize: 16,
              paddingLeft: 10,
             
            }}>
            {msg === '' ? ' Loading ...' : msg}
          </Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  contianer: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  loader: {
    height: 70,
    backgroundColor: Theme.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    top: scale(-20),
  },
});

export default Loader;
