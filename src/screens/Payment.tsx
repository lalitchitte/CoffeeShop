import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import {useStore} from '../store/store';
import PopupAnimation from '../components/PopupAnimation';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const Payment = ({navigation, route}: any) => {
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );

  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('OrderHistory');
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
          style={{flex: 1}}
          source={require('../lottie/successful.json')}></PopupAnimation>
      ) : null}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: SPACING.space_24,
            paddingVertical: SPACING.space_15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}></GradientBGIcon>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_20,
              color: COLORS.primaryWhiteHex,
            }}>
            Payments
          </Text>
          <View
            style={{height: SPACING.space_36, width: SPACING.space_36}}></View>
        </View>

        <View style={{padding: SPACING.space_15, gap: SPACING.space_15}}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card');
            }}>
            <View
              style={[
                {
                  padding: SPACING.space_10,
                  gap: SPACING.space_10,
                  borderRadius: BORDERRADIUS.radius_15 * 2,
                  borderWidth: 3,
                },
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  fontSize: FONTSIZE.size_14,
                  color: COLORS.primaryWhiteHex,
                  marginLeft: SPACING.space_10,
                }}>
                Credit Card
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.primaryGreyHex,
                  borderRadius: BORDERRADIUS.radius_25,
                }}>
                <LinearGradient
                  style={{
                    borderRadius: BORDERRADIUS.radius_25,
                    gap: SPACING.space_36,
                    paddingHorizontal: SPACING.space_15,
                    paddingVertical: SPACING.space_10,
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
                    <CustomIcon
                      name="chip"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}></CustomIcon>

                    <CustomIcon
                      name="visa"
                      size={FONTSIZE.size_30 * 2}
                      color={COLORS.primaryWhiteHex}></CustomIcon>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      gap: SPACING.space_10,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.poppins_semibold,
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.primaryWhiteHex,
                        letterSpacing: SPACING.space_4,
                      }}>
                      3879
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.poppins_semibold,
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.primaryWhiteHex,
                        letterSpacing: SPACING.space_4,
                      }}>
                      8465
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.poppins_semibold,
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.primaryWhiteHex,
                        letterSpacing: SPACING.space_4,
                      }}>
                      7843
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.poppins_semibold,
                        fontSize: FONTSIZE.size_18,
                        color: COLORS.primaryWhiteHex,
                        letterSpacing: SPACING.space_4,
                      }}>
                      1249
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTFAMILY.poppins_regular,
                          fontSize: FONTSIZE.size_12,
                          color: COLORS.secondaryLightGreyHex,
                        }}>
                        Card Holder Name
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONTFAMILY.poppins_medium,
                          fontSize: FONTSIZE.size_18,
                          color: COLORS.primaryWhiteHex,
                        }}>
                        Lalit Chitte
                      </Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTFAMILY.poppins_regular,
                          fontSize: FONTSIZE.size_12,
                          color: COLORS.secondaryLightGreyHex,
                        }}>
                        Expiry Date
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONTFAMILY.poppins_medium,
                          fontSize: FONTSIZE.size_18,
                          color: COLORS.primaryWhiteHex,
                        }}>
                        02/30
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => setPaymentMode(data.name)}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}></PaymentMethod>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <PaymentFooter
        buttonPressHandler={buttonPressHandler}
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price: route.params.amount, currency: '$'}}></PaymentFooter>
    </View>
  );
};

export default Payment;
