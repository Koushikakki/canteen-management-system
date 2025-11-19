import { StyleSheet, Text, View } from 'react-native';
import SectionLists from './src/components/SectionLists';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionLists/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
