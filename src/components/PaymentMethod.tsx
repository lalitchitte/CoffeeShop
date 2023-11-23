import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface PaymentMethodProps {
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View
      style={[
        {
          borderRadius: BORDERRADIUS.radius_15 * 2,
          backgroundColor: COLORS.primaryGreyHex,
          borderWidth: 3,
        },
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: SPACING.space_12,
            paddingHorizontal: SPACING.space_24,
            gap: SPACING.space_24,
            borderRadius: BORDERRADIUS.radius_15 * 2,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SPACING.space_24,
            }}>
            <CustomIcon
              name="wallet"
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}></CustomIcon>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_semibold,
                fontSize: FONTSIZE.size_16,
                color: COLORS.primaryWhiteHex,
              }}>
              {name}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_regular,
              fontSize: FONTSIZE.size_16,
              color: COLORS.secondaryLightGreyHex,
            }}>
            $ 100.50
          </Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: SPACING.space_12,
            paddingHorizontal: SPACING.space_24,
            gap: SPACING.space_24,
            borderRadius: BORDERRADIUS.radius_15 * 2,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <Image
            style={{
              height: SPACING.space_30,
              width: SPACING.space_30,
            }}
            source={icon}></Image>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
            }}>
            {name}
          </Text>
        </LinearGradient>
      )}
    </View>
  );
};

export default PaymentMethod;
