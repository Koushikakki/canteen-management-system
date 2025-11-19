import { ImageSourcePropType } from "react-native"

export type Item = {
    id : string,
    title : string,
    price : number,
    image : ImageSourcePropType
}