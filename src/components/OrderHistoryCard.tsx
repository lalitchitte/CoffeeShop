import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import OrderItemCard from './OrderItemCard';

interface OrderHistoryCardProps {
  navigationHandler: any;
  OrderDate: string;
  CartListPrice: string;
  CartList: any;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  OrderDate,
  CartListPrice,
  CartList,
}) => {
  return (
    <View
      style={{
        gap: SPACING.space_10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: SPACING.space_20,
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
            }}>
            Order Time
          </Text>

          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_light,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
            }}>
            {OrderDate}
          </Text>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_semibold,
              fontSize: FONTSIZE.size_16,
              color: COLORS.primaryWhiteHex,
            }}>
            Total Amount
          </Text>

          <Text
            style={{
              fontFamily: FONTFAMILY.poppins_medium,
              fontSize: FONTSIZE.size_18,
              color: COLORS.primaryOrangeHex,
            }}>
            $ {CartListPrice}
          </Text>
        </View>
      </View>

      <View style={{gap: SPACING.space_20}}>
        {CartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() =>
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              })
            }>
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}></OrderItemCard>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OrderHistoryCard;
