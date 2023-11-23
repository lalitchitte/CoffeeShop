import {
  View,
  Text,
  ImageProps,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface ImageBackgroundInfoProps {
  enableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  backHandler?: any;
  toggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  enableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  backHandler,
  toggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={{
          width: '100%',
          aspectRatio: 20 / 25,
          justifyContent: 'space-between',
        }}>
        {enableBackHandler ? (
          <View
            style={{
              padding: SPACING.space_24,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => backHandler()}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}></GradientBGIcon>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavourite(favourite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}></GradientBGIcon>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              padding: SPACING.space_30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => toggleFavourite(favourite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}></GradientBGIcon>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={{
            paddingVertical: SPACING.space_24,
            paddingHorizontal: SPACING.space_30,
            backgroundColor: COLORS.primaryBlackRGBA,
            borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
            borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
          }}>
          <View
            style={{justifyContent: 'space-between', gap: SPACING.space_15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_semibold,
                    fontSize: FONTSIZE.size_24,
                    color: COLORS.primaryWhiteHex,
                  }}>
                  {name}
                </Text>

                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_medium,
                    fontSize: FONTSIZE.size_12,
                    color: COLORS.primaryWhiteHex,
                  }}>
                  {special_ingredient}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SPACING.space_20,
                }}>
                <View
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: BORDERRADIUS.radius_15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primaryBlackHex,
                  }}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}></CustomIcon>
                  <Text
                    style={[
                      {
                        fontFamily: FONTFAMILY.poppins_medium,
                        fontSize: FONTSIZE.size_10,
                        color: COLORS.primaryWhiteHex,
                      },
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>

                <View
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: BORDERRADIUS.radius_15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primaryBlackHex,
                  }}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}></CustomIcon>
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.poppins_medium,
                      fontSize: FONTSIZE.size_10,
                      color: COLORS.primaryWhiteHex,
                      marginTop: SPACING.space_2 + SPACING.space_4,
                    }}>
                    {ingredients}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: SPACING.space_10,
                  alignItems: 'center',
                }}>
                <CustomIcon
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}></CustomIcon>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_semibold,
                    fontSize: FONTSIZE.size_18,
                    color: COLORS.primaryWhiteHex,
                    marginTop: SPACING.space_4,
                  }}>
                  {average_rating}
                </Text>

                <Text
                  style={{
                    fontFamily: FONTFAMILY.poppins_regular,
                    fontSize: FONTSIZE.size_12,
                    color: COLORS.primaryWhiteHex,
                    marginTop: SPACING.space_4,
                  }}>
                  ({ratings_count})
                </Text>
              </View>

              <View
                style={{
                  height: 55,
                  width: 55 * 2 + SPACING.space_20,
                  borderRadius: BORDERRADIUS.radius_15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.primaryBlackHex,
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundInfo;
