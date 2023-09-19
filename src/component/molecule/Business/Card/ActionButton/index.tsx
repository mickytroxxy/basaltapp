import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {
  TouchableNativeFeedback,
  View,
} from 'react-native';

import {Box, Text} from '@/component/atom';
import { Card} from '@molecule';
export type PropTypes = {
    variant: 'outline' | 'fill';
    items:{
        name:string;
        renderIcon:() => any;
        onPress:(args:any) => any;
    }[]
}
const ActionButton = ({variant,items}:PropTypes) => {
  const {colors} = useTheme<Theme>();
  return (
    <View style={{marginTop:5,justifyContent:'space-between',flexDirection:'row',paddingLeft:20,paddingRight:20}}>
        {items.map((item, i) => 
            <TouchableNativeFeedback onPress={() => item.onPress(item)} key={i}>
                <Card  variant={'shadow'} style={{width:96,height:96,borderRadius:20,justifyContent:'center',alignItems:'center',backgroundColor: variant === 'fill' ? colors.momoBlue : colors.white}}>
                    {item.renderIcon()}
                    <Box style={{paddingLeft:10,paddingRight:10}}><Text fontFamily={'MTNBrighterSans-Bold'} textAlign={'center'} fontSize={10} style={{color:variant === 'fill' ? colors.white : colors.momoBlue}}>{item.name}</Text></Box>
                </Card>
            </TouchableNativeFeedback>
        )}
    </View>
  );
};

export default ActionButton;