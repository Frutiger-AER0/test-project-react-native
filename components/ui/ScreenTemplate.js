import {Text, View} from "react-native";

export default function ScreenTemplate({ title, description }) {
    return (
        <View className="flex-1 bg-white items-center justify-center p-6">
            <Text className="text-2xl font-bold m-2">{title}</Text>
            <Text className="color-gray-500 items-center">{description}</Text>
        </View>
    );
}