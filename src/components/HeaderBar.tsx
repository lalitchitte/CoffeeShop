import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View
      style={{
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}></GradientBGIcon>
      <Text
        style={{
          fontFamily: FONTFAMILY.poppins_semibold,
          fontSize: FONTSIZE.size_20,
          color: COLORS.primaryWhiteHex,
        }}>
        {title}
      </Text>
      <ProfilePic></ProfilePic>
    </View>
  );
};

export default HeaderBar;
