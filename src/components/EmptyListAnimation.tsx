import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

interface EmptyListAnimation {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimation> = ({title}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <LottieView
        style={{height: 280}}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop></LottieView>
      <Text
        style={{
          fontFamily: FONTFAMILY.poppins_medium,
          fontSize: FONTSIZE.size_16,
          color: COLORS.primaryOrangeHex,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default EmptyListAnimation;
