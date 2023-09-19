import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Icon, Text } from '@atom'
import Card from '@/component/molecule/Card/Card'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'
import { globalBlack, globalGrey, globalWhite } from '@/style-dictionary-dist/momoStyle'
const {width} = Dimensions.get('screen')
const PinMust = () => {
  return (
    <Box bg={'white'} style={{padding:24}}>
      <Card style={styles.container}>
        <View style={{gap:10}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> Be between 4 and 10 digits</Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> Not contain 3 consecutive digits</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> not contain 2 consecutive repeated digits</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> not contain the last 3 digits of your mobile number</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> Not match your birth date</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Icon name="InfoIcon" color='grey' size={16} />
            <Text style={styles.titleValue}> First or last 3 digits of your ID number</Text>
          </View>
        </View>
      </Card>
    </Box>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: gpsw('24'),
      backgroundColor: 'rgba(232, 232, 232, 0.50)',
      borderRadius: gpsw('9'),
      gap:10,
    },
    title: {
      fontFamily: fontFamily('Medium'),
      fontSize: gpsh('14'),
      letterSpacing: -0.5,
      color: globalBlack,
    },
    titleValue: {
      fontFamily: fontFamily('Regular'),
      fontSize: gpsw('12'),
      letterSpacing: -0.5,
      color: "#888",
    }
  });
export default PinMust