import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import FavouriteItem from '../components/FavouriteItem';

const Favourite = ({navigation}: any) => {
  const FavouritesList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const toggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBlackHex}}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            {flex: 1, justifyContent: 'space-between'},
            {marginBottom: tabBarHeight},
          ]}>
          <View style={{flex: 1}}>
            <HeaderBar title="Favourites"></HeaderBar>

            {FavouritesList.length == 0 ? (
              <EmptyListAnimation title="No Favourite"></EmptyListAnimation>
            ) : (
              <View
                style={{
                  paddingHorizontal: SPACING.space_20,
                  gap: SPACING.space_20,
                }}>
                {FavouritesList.map((data: any) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}>
                    <FavouriteItem
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      type={data.type}
                      average_rating={data.average_rating}
                      special_ingredient={data.special_ingredient}
                      ingredients={data.ingredients}
                      name={data.name}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggledFavouriteItem={toggleFavourite}></FavouriteItem>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Favourite;
