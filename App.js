import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
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
    <View style={styles.container}>
      <Text style={{fontFamily:'LoraBold', fontSize: 25, color: '#548566'}}>Panadería "La Flauta"</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
