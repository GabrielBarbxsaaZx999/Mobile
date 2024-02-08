import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gabriel Moreira dos Reis Barbosa 01-15</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textin}>
          A Vlone, marca de moda fundada por A$AP Bari, se destaca por sua estética urbana.
          A colaboração com o rapper Playboi Carti une moda e música, resultando em peças ousadas e únicas. 
          A parceria reflete a influência de Carti na cultura streetwear, gerando coleções que transcendem o vestuário para se tornarem expressões artísticas. 
          Essa colaboração se torna uma fusão de individualidade, autenticidade e criatividade, cativando admiradores da moda e fãs de Carti.
          Juntos, Vlone e Playboi Carti continuam a impactar e inspirar a cultura contemporânea.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 40,
  },
  title: {
    color: 'red',
    fontSize: 50,
    fontWeight: 'bold', // Corrigido aqui: fontWeight em vez de borderWeight
    fontFamily: 'Helvetica',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textin: {
    color: 'red',
    fontSize: 35,
    margin: 100,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
