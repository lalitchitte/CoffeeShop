import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View
      style={{
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
      <Image
        style={{height: SPACING.space_36, width: SPACING.space_36}}
        source={require('../assets/app_images/avatar.png')}></Image>
    </View>
  );
};

export default ProfilePic;
