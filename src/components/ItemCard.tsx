import { Image, Text, View } from "react-native";
import { Item } from "../types/types";

export function ItemCard ({item} : {item : Item}) {
    return(
        <View>
            <Image source={item.image} style ={{height:100,width : 100}} />
            <View>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
            </View>
        </View>
    )
}

export default ItemCard;