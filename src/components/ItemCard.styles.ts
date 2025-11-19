import { Dimensions , StyleSheet} from "react-native";
const {width} = Dimensions.get('window');
export default StyleSheet.create({
    card : {
        width : width-32,
        height  : 130,
        borderRadius : 15,
        backgroundColor : '#f7f5f5',
        marginHorizontal : 16,
        marginVertical: 8,
        flexDirection : "row",
        alignItems : 'center'

    },

    

})