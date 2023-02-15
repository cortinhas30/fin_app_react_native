import Header from '../../components/Header'
import Balance from '../../components/Balance';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name ="Lucas Cortinhas"/>
        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Text style={styles.title}>Últimas movimentações</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 14,
      marginRight: 14,
      marginTop: 14,
    }
});
