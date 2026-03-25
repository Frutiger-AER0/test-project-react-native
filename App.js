import "./global.css"
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import BottomTabs from "./components/navigation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabs />
    </NavigationContainer>
  );
}
