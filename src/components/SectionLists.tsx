import { SectionList, Text, View } from "react-native";
import { menuData } from "../data/data";
import ItemCard from "./ItemCard";

export function SectionLists (){
    return(
        <View>
            <SectionList

                sections={menuData}
                keyExtractor={(item)=> item.id}

                renderItem={({item})=>(
                    <ItemCard item={item} />
                )}

                renderSectionHeader={({section})=>(
                    <Text>{section.title}</Text>
                )
                }
            />
                
            
        </View>
    )
}

export default SectionLists;