import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
  moderateScale,
  moderateVerticalScale,
} from '@/style/theme';

export const gpsw = (size: string) => {
  return getFontSizeByWindowWidth(parseInt(size));
};

export const gpsh = (size: string) => {
  return getFontSizeByWindowHeight(parseInt(size));
};

export const gpmsw = (size: string) => {
  return moderateScale(parseInt(size));
};

export const gpmsh = (size: string) => {
  return moderateVerticalScale(parseInt(size));
};

// export default {
//   gsw,
//   gsh,
// };
