import { SectionList, Text, View } from "react-native";
import { Section } from "../types/types";
import ItemCard from "./ItemCard";

export function SectionLists ({sections}: {sections : Section[]}){
    return(
        <View>
            <SectionList

                sections={sections}
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