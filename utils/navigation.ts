import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const navigation = useNavigation<NativeStackNavigationProp<{
    Ingredients: undefined; 
    Home: undefined;
    Camera: undefined;
}>>();