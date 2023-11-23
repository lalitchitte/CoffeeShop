import {View, Text, ImageProps} from 'react-native';
import React from 'react';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface FavouriteItemProps {
  id: string;
  imagelink_portrait: ImageProps;
  type: string;
  average_rating: number;
  special_ingredient: string;
  ingredients: string;
  name: string;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggledFavouriteItem: any;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({
  id,
  imagelink_portrait,
  type,
  average_rating,
  special_ingredient,
  ingredients,
  name,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggledFavouriteItem,
}) => {
  return (
    <View
      style={{
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden',
      }}>
      <ImageBackgroundInfo
        enableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        toggleFavourite={ToggledFavouriteItem}></ImageBackgroundInfo>
      <LinearGradient
        style={{
          gap: SPACING.space_10,
          padding: SPACING.space_20,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_16,
            color: COLORS.secondaryLightGreyHex,
          }}>
          Description
        </Text>
        <Text
          style={{
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryWhiteHex,
          }}>
          {description}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default FavouriteItem;
