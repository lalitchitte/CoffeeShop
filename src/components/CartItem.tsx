import {View, Text, ImageProps, Image, TouchableOpacity} from 'react-native';
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

interface CartItemProps {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  roasted: string;
  prices: any;
  type: string;
  incrementCartItemQuantityHandler: any;
  decrementCartItemQuantityHandler: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          style={{
            flex: 1,
            gap: SPACING.space_12,
            padding: SPACING.space_12,
            borderRadius: BORDERRADIUS.radius_25,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View style={{flexDirection: 'row', gap: SPACING.space_12, flex: 1}}>
            <Image
              style={{
                height: 130,
                width: 130,
                borderRadius: BORDERRADIUS.radius_20,
              }}
              source={imagelink_square}></Image>
            <View
              style={{
                flex: 1,
                paddingVertical: SPACING.space_4,
                justifyContent: 'space-between',
              }}>
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

              <View
                style={{
                  height: 50,
                  width: 50 * 2 + SPACING.space_20,
                  borderRadius: BORDERRADIUS.radius_15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.primaryDarkGreyHex,
                }}>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_10,
                    color: COLORS.primaryWhiteHex,
                  }}>
                  {roasted}
                </Text>
              </View>
            </View>
          </View>

          {prices.map((data: any, index: any) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                gap: SPACING.space_20,
                flexDirection: 'row',
                justifyContent: 'center',
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
                    height: 40,
                    width: 100,
                    borderRadius: BORDERRADIUS.radius_10,
                    justifyContent: 'center',
                    alignItems: 'center',
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

                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_semibold,
                    color: COLORS.primaryOrangeHex,
                    fontSize: FONTSIZE.size_18,
                  }}>
                  {data.currency}
                  <Text
                    style={{
                      color: COLORS.primaryWhiteHex,
                    }}>
                    {' '}
                    {data.price}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primaryOrangeHex,
                    padding: SPACING.space_12,
                    borderRadius: BORDERRADIUS.radius_10,
                  }}
                  onPress={() =>
                    decrementCartItemQuantityHandler(id, data.size)
                  }>
                  <CustomIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}></CustomIcon>
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: COLORS.primaryBlackHex,
                    width: 80,
                    borderRadius: BORDERRADIUS.radius_10,
                    borderWidth: 2,
                    borderColor: COLORS.primaryOrangeHex,
                    alignItems: 'center',
                    paddingVertical: SPACING.space_4,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_semibold,
                      color: COLORS.primaryWhiteHex,
                      fontSize: FONTSIZE.size_14,
                    }}>
                    {data.quantity}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primaryOrangeHex,
                    padding: SPACING.space_12,
                    borderRadius: BORDERRADIUS.radius_10,
                  }}
                  onPress={() =>
                    incrementCartItemQuantityHandler(id, data.size)
                  }>
                  <CustomIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}></CustomIcon>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: SPACING.space_12,
            padding: SPACING.space_12,
            borderRadius: BORDERRADIUS.radius_25,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: BORDERRADIUS.radius_20,
              }}
              source={imagelink_square}></Image>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'space-around',
            }}>
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
                  color: COLORS.primaryLightGreyHex,
                }}>
                {special_ingredient}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: COLORS.primaryBlackHex,
                  height: 40,
                  width: 100,
                  borderRadius: BORDERRADIUS.radius_10,
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  {prices[0].size}
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  color: COLORS.primaryOrangeHex,
                  fontSize: FONTSIZE.size_18,
                }}>
                {prices[0].currency}
                <Text
                  style={{
                    color: COLORS.primaryWhiteHex,
                  }}>
                  {' '}
                  {prices[0].price}
                </Text>
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primaryOrangeHex,
                  padding: SPACING.space_12,
                  borderRadius: BORDERRADIUS.radius_10,
                }}
                onPress={() =>
                  decrementCartItemQuantityHandler(id, prices[0].size)
                }>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}></CustomIcon>
              </TouchableOpacity>

              <View
                style={{
                  backgroundColor: COLORS.primaryBlackHex,
                  width: 80,
                  borderRadius: BORDERRADIUS.radius_10,
                  borderWidth: 2,
                  borderColor: COLORS.primaryOrangeHex,
                  alignItems: 'center',
                  paddingVertical: SPACING.space_4,
                }}>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_semibold,
                    color: COLORS.primaryWhiteHex,
                    fontSize: FONTSIZE.size_14,
                  }}>
                  {prices[0].quantity}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primaryOrangeHex,
                  padding: SPACING.space_12,
                  borderRadius: BORDERRADIUS.radius_10,
                }}
                onPress={() =>
                  incrementCartItemQuantityHandler(id, prices[0].size)
                }>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}></CustomIcon>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default CartItem;
