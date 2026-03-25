import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ProfileSwiper from "../screens/ProfileSwiper";

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile Swiper" component={ProfileSwiper} />
        </Tab.Navigator>
    )
}