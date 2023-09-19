import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icons from '@/constants/icon';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Text} from '@atom';
import {useTheme} from '@shopify/restyle';
import Card from './Card';
import { gpsh } from '@/utils/parseTokenStyle';

type QuickActionType = {
  title?: string;
  subtitle?: string;
  icon?: any;
  bg?: 'white' | 'colored';
  width?: number;
  disabled?: boolean;
  onPress?: () => void;
  variant?: 'shadow' | 'noShadow';
  renderRightIcon?:any;
  renderLeftIcon?:any;
};

const QuickAction = ({
  title,
  subtitle,
  icon,
  bg,
  disabled,
  onPress,
  width,
  variant = 'noShadow',
  renderRightIcon,
  renderLeftIcon
}: QuickActionType) => {
  const {colors, spacing} = useTheme<Theme>();
  const {RightIcon, SettingsIcon} = icons;
  return (
    <Card variant={variant} style={{borderRadius:9,shadowColor: 'rgba(0,0,0,0.2)'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        onPress={onPress}
        //   opacity={0.7}
        style={[
          {
            backgroundColor: disabled
              ? '#4D849C'
              : bg === 'colored'
              ? colors.momoBlue
              : 'white',
            paddingHorizontal: gsw(10),
            // paddingVertical: 10,
            borderRadius: 9,
            paddingVertical:gsh(16)
          },
          // @ts-ignore
          width && {width: gsw(width)},
          
        ]}>
        <Box borderRadius={9} alignItems={'center'} flexDirection={'row'} style={{gap: gsw(10),paddingHorizontal:gpsh('14')}}>
          {renderLeftIcon && renderLeftIcon()}
          <Box>
            <Text
              style={{
                fontSize: gsw(12),
                lineHeight: gsw(15.6),
                color: bg !== 'colored' ? colors.momoBlue : 'white',
                fontFamily: 'MTNBrighterSans-Medium',
              }}>
              {title}
            </Text>
            {subtitle && (
              <Text
                style={{
                  fontSize: gsw(9),
                  lineHeight: gsw(11.6),
                  color: bg !== 'colored' ? '#5F5F5F' : 'white',
                }}>
                {subtitle}
              </Text>
            )}
          </Box>
        </Box>
        {renderRightIcon && renderRightIcon()}
      </TouchableOpacity>
    </Card>
  );
};

export default QuickAction;

//    // <Shadow
//   distance={gsh(7)}
//   startColor={'#ececec'}
//   offset={[1,5]}
//   style={{
//     width: '100%',
//   }}
//   containerStyle={{
//     width: '100%',
//     backgroundColor: 'white',
//   }}>
