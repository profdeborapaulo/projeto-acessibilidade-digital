import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const FurtoScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardFurto.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
        Você sabe a diferença entre furto e assalto? E, mais importante, como se prevenir de
          ambos? A Lipa's está aqui para garantir sua segurança e te orientar sobre como evitar essas
          situações!
          Roubo e furto são dois tipos de crimes contra o patrimônio, mas que possuem uma
          diferença.
       </Text>
       <Text style = {styles.paragrafo}>
         O furto acontece quando subtração dos bens ocorre sem uso de violência oi ameaça contra
           a vítima. Ou seja, o ladrão age quando a vítima está distraída ou sem confrontá-la
           diretamente, dessa forma retirando o item sem que seja notado, como no caso do furto de
           uma carteira em um local público.
       </Text>
       <Text style = {styles.paragrafo}>
         Já no roubo, além da subtração dos bens, há o uso de violência ou ameaça para intimidar a
          vítima. A violência força a entrega dos bens, como em um assalto a mão armada.
          Assim, a principal diferença entre esses dois tipos de crimes seria o uso da violência
       </Text>
       <Text style = {styles.paragrafo}>
         Como se prevenir?
           A seguir estão algumas dicas que a equipe Lipa's separou para você se cuidar e se prevenir
           destes tipos de crimes!
       </Text>
       <Text style = {styles.paragrafo}>
      1. Evite lugares Desertos e com má iluminação
       </Text>
       <Text style = {styles.paragrafo}>
        Evite ruas desertas e mal iluminadas, pois a maioria dos relatos aponta esses locais como
          cenário de incidentes. Além disso, ruas bem iluminadas e movimentadas tendem a ser mais
          seguras e transmitir maior sensação de proteção.
       </Text>
       <Text style = {styles.paragrafo}>
       2. Não deixe itens de valor à mostra e fique atento
       </Text>
       <Text style = {styles.paragrafo}>
       Evite andar distraído com o celular ou outros itens à mostra nos bolsos externos da calça.
        Em horários de pico, inclusive nos transportes públicos, essa prática facilita a ação de
        ladrões, permitindo que roubem seus pertences com mais facilidade. Se estiver de carro, 
        não deixe objetos de valor visíveis nos bancos, pois isso também atrai a atenção de
        assaltantes.
       </Text>
       <Text style = {styles.paragrafo}>
       3. Observe ao seu redor
       </Text>
       <Text style = {styles.paragrafo}>
         Esteja sempre atento a movimentações suspeitas ao seu redor, especialmente quando for
         realizar alguma atividade, como mexer na bolsa ou abrir o carro, pois esses são os
         momentos em que assaltantes geralmente aproveitam para agir.
       </Text>
       <Text style = {styles.paragrafo}>
       Evite andar distraído com o celular ou outros itens à mostra nos bolsos externos da calça.
        Em horários de pico, inclusive nos transportes públicos, essa prática facilita a ação de
        ladrões, permitindo que roubem seus pertences com mais facilidade. Se estiver de carro, 
        não deixe objetos de valor visíveis nos bancos, pois isso também atrai a atenção de
        assaltantes.
       </Text>
       <Text style = {styles.paragrafo}>
       Caso isso aconteça com você, não se esqueça de ir a delegacia mais próxima e prestar um
         boletim de ocorrência para que seja possível recuperar seus itens e pegar o ladrão.
       </Text>
       <Text style = {styles.paragrafo}>
       Lembre-se, se você se sentir insegura você pode contar com a Lipa's! Utilize o botão de
         pânico para emitir o alarme, ligar para a polícia, compartilhar localização ou enviar
         mensagens para seus contatos adicionados. Isso é Lipa's! 
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
  titulo: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 50,
  },
  lista: {
    fontSize: 24,
    fontFamily: "Inter_500Medium",
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

export default FurtoScreen;