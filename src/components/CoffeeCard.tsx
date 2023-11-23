import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
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
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeeCarProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}
const CoffeeCard: React.FC<CoffeeCarProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      style={{
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        style={{
          width: CARD_WIDTH,
          height: CARD_WIDTH,
          borderRadius: BORDERRADIUS.radius_20,
          marginBottom: SPACING.space_15,
          overflow: 'hidden',
        }}
        source={imagelink_square}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.primaryBlackRGBA,
            alignItems: 'center',
            justifyContent: 'center',
            gap: SPACING.space_10,
            paddingHorizontal: SPACING.space_15,
            position: 'absolute',
            borderBottomLeftRadius: BORDERRADIUS.radius_20,
            borderTopRightRadius: BORDERRADIUS.radius_20,
            top: 0,
            right: 0,
          }}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                color: COLORS.primaryWhiteHex,
                fontSize: FONTSIZE.size_14,
                lineHeight: 22,
              }}>
              {average_rating}
            </Text>
          </CustomIcon>
        </View>
      </ImageBackground>
      <Text
        style={{
          fontFamily: FONTFAMILY.poppins_medium,
          color: COLORS.primaryWhiteHex,
          fontSize: FONTSIZE.size_16,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontFamily: FONTFAMILY.poppins_light,
          color: COLORS.primaryWhiteHex,
          fontSize: FONTSIZE.size_10,
        }}>
        {special_ingredient}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: SPACING.space_15,
        }}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryOrangeHex,
            fontSize: FONTSIZE.size_18,
          }}>
          $
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
            }}>
            {price.price}
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler({
              id,
              index,
              type,
              roasted,
              name,
              special_ingredient,
              prices: [{...price, quantity: 1}],
            });
          }}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name="add"
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}></BGIcon>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CoffeeCard;
