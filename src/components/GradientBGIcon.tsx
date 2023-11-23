import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, color, size}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
      }}>
      <LinearGradient
        style={{
          height: SPACING.space_36,
          width: SPACING.space_36,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <CustomIcon name={name} color={color} size={size}></CustomIcon>
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;
