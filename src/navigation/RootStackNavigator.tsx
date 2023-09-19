import {RootStackParams} from '@/typings/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthNavigator';
import {useTypedSelector} from '@/store/store';
import {selectMessage} from '@/features/alert/alertSlice';
import {Alert} from '@molecule';
import MainStackNavigator from './MainStackNavigator';

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  const message = useTypedSelector(selectMessage);
  console.log('message', message);
  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {true ? (
          <RootStack.Screen name="Main" component={MainStackNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
      {message.length !== 0 && <Alert />}
    </>
  );
};

export default RootStackNavigator;
