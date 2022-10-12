import { View, Text, Pl } from "react-native";
import SigneInStack from "./navigation"; 

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
    >
      <SigneInStack/>      
    </View>
  );
}
