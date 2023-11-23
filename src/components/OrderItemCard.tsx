import {View, Text, ImageProps, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface OrderItemCardProps {
  type: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: any;
  ItemPrice: string;
  name: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  special_ingredient,
  imagelink_square,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      style={{
        gap: SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: SPACING.space_20,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 90,
              width: 90,
              borderRadius: BORDERRADIUS.radius_15,
            }}
            source={imagelink_square}></Image>
          <View>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_18,
                color: COLORS.primaryWhiteHex,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_regular,
                fontSize: FONTSIZE.size_12,
                color: COLORS.secondaryLightGreyHex,
              }}>
              {special_ingredient}
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_20,
              color: COLORS.primaryOrangeHex,
            }}>
            $
            <Text
              style={{
                color: COLORS.primaryWhiteHex,
              }}>
              {ItemPrice}
            </Text>
          </Text>
        </View>
      </View>
      {prices.map((data: any, index: any) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          key={index.toString()}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: COLORS.primaryBlackHex,
                flex: 1,
                borderTopLeftRadius: BORDERRADIUS.radius_10,
                height: 45,
                borderBottomLeftRadius: BORDERRADIUS.radius_10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: COLORS.primaryGreyHex,
              }}>
              <Text
                style={[
                  {
                    fontFamily: FONTFAMILY.poppins_medium,
                    color: COLORS.secondaryLightGreyHex,
                  },
                  {
                    fontSize:
                      type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                  },
                ]}>
                {data.size}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: COLORS.primaryBlackHex,
                flex: 1,
                borderTopRightRadius: BORDERRADIUS.radius_10,
                height: 45,
                borderBottomRightRadius: BORDERRADIUS.radius_10,
                justifyContent: 'center',
                alignItems: 'center',
                borderLeftWidth: 1,
                borderLeftColor: COLORS.primaryGreyHex,
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  fontSize: FONTSIZE.size_18,
                  color: COLORS.primaryOrangeHex,
                }}>
                {data.currency}
                <Text style={{color: COLORS.primaryWhiteHex}}>
                  {data.price}
                </Text>
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontFamily: FONTFAMILY.poppins_semibold,
                fontSize: FONTSIZE.size_18,
                color: COLORS.primaryOrangeHex,
              }}>
              X{' '}
              <Text style={{color: COLORS.primaryWhiteHex}}>
                {data.quantity}
              </Text>
            </Text>

            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontFamily: FONTFAMILY.poppins_semibold,
                fontSize: FONTSIZE.size_18,
                color: COLORS.primaryOrangeHex,
              }}>
              $ {(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

export default OrderItemCard;
