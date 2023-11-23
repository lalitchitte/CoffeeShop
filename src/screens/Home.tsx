import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import CoffeeCard from '../components/CoffeeCard';
import {useNavigation} from '@react-navigation/native';

const getCategoryData = (data: any) => {
  let temp: any = [];
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const Home = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState(getCategoryData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 1,
    category: categories[1],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const CoffeeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBlackHex}}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HeaderBar title={'Home'} />

        <Text
          style={{
            fontSize: FONTSIZE.size_28,
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryWhiteHex,
            paddingLeft: SPACING.space_30,
          }}>
          Find the Best{'\n'}Coffee for You
        </Text>

        <View
          style={{
            margin: SPACING.space_20,
            borderRadius: BORDERRADIUS.radius_20,
            backgroundColor: COLORS.primaryDarkGreyHex,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <CustomIcon
              style={{marginHorizontal: SPACING.space_20}}
              name="search"
              size={FONTSIZE.size_20}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }></CustomIcon>
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 1,
              height: SPACING.space_20 * 3,
              fontFamily: FONTFAMILY.poppins_medium,
              fontSize: FONTSIZE.size_14,
              color: COLORS.primaryWhiteHex,
            }}
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={data => {
              setSearchText(data);
              searchCoffee(data);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}></TextInput>

          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <CustomIcon
                style={{marginHorizontal: SPACING.space_20}}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}></CustomIcon>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: SPACING.space_15,
            marginBottom: SPACING.space_2,
          }}>
          {categories.map((data, index) => (
            <View
              style={{paddingHorizontal: SPACING.space_15}}
              key={index.toString()}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    {
                      fontFamily: FONTFAMILY.poppins_semibold,
                      fontSize: FONTSIZE.size_16,
                      color: COLORS.primaryLightGreyHex,
                      marginBottom: SPACING.space_2,
                    },
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View
                    style={{
                      height: SPACING.space_10,
                      width: SPACING.space_10,
                      borderRadius: BORDERRADIUS.radius_10,
                      backgroundColor: COLORS.primaryOrangeHex,
                    }}
                  />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <FlatList
          ref={ListRef}
          ListEmptyComponent={
            <View
              style={{
                width: Dimensions.get('window').width - SPACING.space_30 * 2,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: SPACING.space_36 * 3.5,
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  fontSize: FONTSIZE.size_16,
                  color: COLORS.primaryLightGreyHex,
                  marginBottom: SPACING.space_4,
                }}>
                No Coffee Available
              </Text>
            </View>
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={{
            gap: SPACING.space_20,
            paddingVertical: SPACING.space_20,
            paddingHorizontal: SPACING.space_20,
          }}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}></CoffeeCard>
              </TouchableOpacity>
            );
          }}
        />

        <Text
          style={{
            fontSize: FONTSIZE.size_16,
            marginLeft: SPACING.space_30,
            marginTop: SPACING.space_20,
            fontFamily: FONTFAMILY.poppins_medium,
            color: COLORS.secondaryLightGreyHex,
          }}>
          Coffee Beans
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            {
              gap: SPACING.space_20,
              paddingVertical: SPACING.space_20,
              paddingHorizontal: SPACING.space_20,
            },
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}></CoffeeCard>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
