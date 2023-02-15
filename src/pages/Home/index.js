import Header from '../../components/Header'
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Pagina Home!!</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
});
