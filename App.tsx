import { StyleSheet, Text, View } from 'react-native';
import SectionLists from './src/components/SectionLists';
import { menuData } from './src/data/data';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text style={styles.heading}>Everest Canteen</Text></View>
      <SectionLists sections={menuData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom :70
    },
    heading : {
      textAlign:'center',
      fontSize : 28,
      fontWeight : '700',
      color: "#000001ff",
      marginHorizontal : 16,
      marginBottom : 20
    }
});
