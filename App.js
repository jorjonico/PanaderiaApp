import ShopNavigator from './src/navigation/ShopNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'LoraReg': require('./src/assets/fonts/Lora-Regular.ttf'),
    'LoraBold': require('./src/assets/fonts/Lora-Bold.ttf'),
  });
  
  if(!fontsLoaded) {
    return null
  };
  
  return <ShopNavigator />
}