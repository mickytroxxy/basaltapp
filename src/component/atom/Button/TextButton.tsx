import React from 'react';
import TouchableOpacity, {TouchableOpacityProps} from '../TouchableOpacity';
import Text from '../Text';

type TextButtonType = TouchableOpacityProps & {
  onPress: () => void;
  title: string;
};
const TextButton = ({onPress, title, ...props}: TextButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text color={'momoBlue'} variant={'regular12'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
