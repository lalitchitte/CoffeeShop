import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const Details = ({navigation, route}: any) => {
  const itemofIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(itemofIndex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const toggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const backHandler = () => {
    navigation.pop();
  };

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBlackHex}}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <ImageBackgroundInfo
          enableBackHandler={true}
          imagelink_portrait={itemofIndex.imagelink_portrait}
          type={itemofIndex.type}
          id={itemofIndex.id}
          favourite={itemofIndex.favourite}
          name={itemofIndex.name}
          special_ingredient={itemofIndex.special_ingredient}
          ingredients={itemofIndex.ingredients}
          average_rating={itemofIndex.average_rating}
          ratings_count={itemofIndex.ratings_count}
          roasted={itemofIndex.roasted}
          backHandler={backHandler}
          toggleFavourite={toggleFavourite}></ImageBackgroundInfo>

        <View style={{padding: SPACING.space_20}}>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
              marginBottom: SPACING.space_10,
            }}>
            Description
          </Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text
                style={{
                  letterSpacing: 0.5,
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_14,
                  color: COLORS.primaryWhiteHex,
                  marginBottom: SPACING.space_30,
                }}>
                {itemofIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text
                style={{
                  letterSpacing: 0.5,
                  fontFamily: FONTFAMILY.poppins_regular,
                  fontSize: FONTSIZE.size_14,
                  color: COLORS.primaryWhiteHex,
                  marginBottom: SPACING.space_30,
                }}
                numberOfLines={3}>
                {itemofIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
              marginBottom: SPACING.space_10,
            }}>
            Size
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: SPACING.space_20,
            }}>
            {itemofIndex.prices.map((data: any) => (
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    backgroundColor: COLORS.primaryDarkGreyHex,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: SPACING.space_24 * 2,
                    borderRadius: BORDERRADIUS.radius_10,
                    borderWidth: 2,
                  },
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}
                key={data.size}
                onPress={() => setPrice(data)}>
                <Text
                  style={[
                    {fontFamily: FONTFAMILY.poppins_medium},
                    {
                      fontSize:
                        itemofIndex.type == 'bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <PaymentFooter
          price={price}
          buttonTitle={'Add to Cart'}
          buttonPressHandler={() => {
            addToCartHandler({
              id: itemofIndex.id,
              index: itemofIndex.index,
              name: itemofIndex.name,
              roasted: itemofIndex.roasted,
              imagelink_square: itemofIndex.imagelink_square,
              special_ingredient: itemofIndex.special_ingredient,
              type: itemofIndex.type,
              price: price,
            });
          }}></PaymentFooter>
      </ScrollView>
    </View>
  );
};

export default Details;
