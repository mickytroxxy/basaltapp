import { AuthStackParams } from '@/typings/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator<AuthStackParams>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        
   
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
