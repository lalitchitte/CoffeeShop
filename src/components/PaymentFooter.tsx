import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_20,
        padding: SPACING.space_20,
      }}>
      <View style={{alignItems: 'center', width: 100}}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_14,
            color: COLORS.secondaryLightGreyHex,
          }}>
          Price
        </Text>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_24,
            color: COLORS.primaryOrangeHex,
          }}>
          {price.currency}{' '}
          <Text style={{color: COLORS.primaryWhiteHex}}>{price.price}</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primaryOrangeHex,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: SPACING.space_36 * 2,
          borderRadius: BORDERRADIUS.radius_20,
        }}
        onPress={() => buttonPressHandler()}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex,
          }}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentFooter;
