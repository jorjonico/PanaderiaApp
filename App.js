import MainNavigator from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'LoraReg': require('./src/assets/fonts/Lora-Regular.ttf'),
    'LoraBold': require('./src/assets/fonts/Lora-Bold.ttf'),
  });
  
  if(!fontsLoaded) {
    return null
  };
  
  return (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
  );
};