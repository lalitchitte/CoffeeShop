import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopupAnimation from '../components/PopupAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistory = ({navigation}: any) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  console.log(OrderHistoryList.length);

  const tabBarHeight = useBottomTabBarHeight();

  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
      }}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      {showAnimation ? (
        <PopupAnimation
          style={{height: 250}}
          source={require('../lottie/download.json')}></PopupAnimation>
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View
          style={[
            {flex: 1, justifyContent: 'space-between'},
            {marginBottom: tabBarHeight},
          ]}>
          <View style={{flex: 1}}>
            <HeaderBar title="Order History"></HeaderBar>
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title="No Order History"></EmptyListAnimation>
            ) : (
              <View
                style={{
                  paddingHorizontal: SPACING.space_20,
                  gap: SPACING.space_30,
                }}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    OrderDate={data.OrderDate}
                    CartListPrice={data.CartListPrice}
                    CartList={data.CartList}></OrderHistoryCard>
                ))}
              </View>
            )}
          </View>

          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={{
                margin: SPACING.space_20,
                backgroundColor: COLORS.primaryOrangeHex,
                alignItems: 'center',
                justifyContent: 'center',
                height: SPACING.space_36 + 10,
                borderRadius: BORDERRADIUS.radius_20,
              }}
              onPress={() => buttonPressHandler()}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  fontSize: FONTSIZE.size_18,
                  color: COLORS.primaryWhiteHex,
                }}>
                Download
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
