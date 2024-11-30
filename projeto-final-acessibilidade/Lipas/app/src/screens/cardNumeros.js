import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import { useTheme } from './ThemeContext'; 

const NumerosScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardNumeros.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Em momentos de emergência, é crucial ter os contatos certos à mão. Lipa's está aqui para garantir que 
       você permaneça informado e protegido. Abaixo, listamos os principais números de emergência do estado de 
       São Paulo:
       </Text>
       <Text style = {styles.lista}> 
       - Corpos de Bombeiros: 193
       </Text>
       <Text style = {styles.lista}> 
       - Polícia Militar: 190
       </Text>
       <Text style = {styles.lista}> 
       - Polícia Civil: 197
       </Text>
       <Text style = {styles.lista}> 
       - Polícia Rodoviária Federal: 191
       </Text>
       <Text style = {styles.lista}> 
       - Polícia Rodoviária Estadual: 198
       </Text>
       <Text style = {styles.lista}> 
       - Defesa Civil: 199
       </Text>
       <Text style = {styles.lista}> 
       - Serviço de Atendimento Móvel de Urgência (SAMU): 192
       </Text>
       <Text style = {styles.paragrafo}>
       Caso sinta falta de algo mais específico, por favor, avalie o app Lipa's para que possamos incluir e 
       oferecer um serviço mais abrangente.
       </Text>


       <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
       </View>

    </View>

    </ScrollView>
 
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image source = {require('../assets/setacircurlar.png')} style = {styles.botao} />
    </TouchableWithoutFeedback>

    </View>
  );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
  },
  botao: {
    width: 51,
    height: 50,
    marginLeft: 20,
    marginTop: 50,
    position: 'absolute',
  },
  card: {
    width: '100%',
    height: 550,
    marginTop: 30,
  },
  texto: {
    width: 400,
  },
  paragrafo: {
    fontSize: 24,
    fontFamily: "Inter_500Medium",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 20,
  },
  lista: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 5,
  },
  combo: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaça os itens uniformemente
    padding: 15,
  },
  espaco: {
    width: '100%',
    height: 50,
  },
});

export default NumerosScreen;