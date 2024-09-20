import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiCarolinaScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leicarolina.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       A lei 12.737 ou Carolina Dieckmann, foi criada após a atriz ter imagens íntimas roubadas e vazadas do seu e-mail, 
       tornando assim um crime a invasão de aparelhos eletrônicos para obter dados particulares a partir de 2 de Dezembro 
       de 2012.
       </Text>
       <Text style = {styles.paragrafo}>
       Esta lei foi um marco na legislação brasileira, pois trata-se da criação de mecanismos legais para combater crimes 
       cibernéticos, para proteger a privacidade dos cidadãos e garantir a segurança no ambiente digital. Uma observação que 
       destaca a importância dessa lei é que ela foi criada há mais de 10 anos, em um período em que a internet e o mundo digital 
       estavam em plena fase de desenvolvimento e não eram tão populares como hoje. A internet naquela época era diferente da 
       atual, pois não era tão avançada como hoje, mas mesmo assim, a Lei Carolina Dieckmann continua sendo relevante e eficaz 
       na proteção contra crimes cibernéticos nos dias de hoje.
       </Text>
       <Text style = {styles.paragrafo}>
       É válido ressaltar que essa lei é válida para todos, e não somente para mulheres.
       </Text>
       <Text style = {styles.paragrafo}>
       A forma de como como a lei analisa e define a invasão de dispositivos informáticos (computadores, smartphones, tablets, etc) 
       funciona da seguinte maneira:
       </Text>
       <Text style = {styles.lista}>
       - Invasão de Dispositivo Informático:  Adentrar sem autorização em dispositivos alheios. 
       </Text>
       <Text style = {styles.lista}>
       - Obtenção de Dados: Acessar, copiar ou divulgar dados ou informações armazenadas sem o consentimento do titular.
       </Text>
       <Text style = {styles.lista}>
       - Alteração, Destruição ou Vazamentos de dados: Modificar, distribuir, copiar ou divulgar informações pessoais sem consentimento do responsável, causando prejuízo ao titular.
       </Text>
       <Text style = {styles.lista}>
       - Instalação de Vulnerabilidade: Fazer downloads no dispositivo sem autorização, que possam causar danos ou obter benefícios indesejáveis.
       </Text>
       <Text style = {styles.paragrafo}>
       Uma observação importante a se fazer é que esta lei pode causar modificações no código penal brasileiro, mais especificamente 
       nos artigos:
       </Text>
       <Text style = {styles.paragrafo}>
       Art. 154-A – “trata da invasão de dispositivo informático, com penas que variam de 3 meses a 1 ano de detenção, além de multa. 
       Em caso de obtenção, destruição ou adulteração de dados, ou se houver crime de roubo contra autoridades, empresas, ou bancos de 
       dados do governo, as penas podem ser aumentadas.”
       </Text>
       <Text style = {styles.paragrafo}>
       Art. 154-B – “Estabelece a possibilidade de aumento da pena caso o crime seja violação mediante violação de mecanismos de segurança 
       ou com o uso de programas de computador que permitam o controle remoto do invadido.”
       </Text>
       <Text style = {styles.paragrafo}>
       Também é importante analisar as leis que podem ser complementares a esta lei, Carolina Dieckmann, como:
       </Text>
       <Text style = {styles.paragrafo}>
       Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) – “Regula o tratamento de dados pessoais, impondo avaliações em caso de 
       vazamento de dados ou uso indevido de informações pessoais.”
       </Text>
       <Text style = {styles.paragrafo}>
       Lei de Crimes Cibernéticos (Lei nº 14.155/2021) – “Aperfeiçoa o combate aos crimes cibernéticos, ampliando as penas para invasão de 
       dispositivos e outros delitos cometidos no ambiente digital.”
       </Text>
       <Text style = {styles.paragrafo}>
       Se você foi vítima de um crime cibernético, segue as dicas que o Lipa’s separou para você de como fazer a denúncia:
       </Text>
       <Text style = {styles.lista}>
       - Colete todas as evidências possíveis (capturas de tela, mensagens, links, etc);
       </Text>
       <Text style = {styles.lista}>
       - Registre um Boletim de Ocorrência indo até uma delegacia, preferencialmente especializada em crimes cibernéticos, que você pode localizar 
         facilmente pesquisando a mais próxima da sua região. Ao chegar, descreva detalhadamente o ocorrido e entregue todas as provas coletadas;
       </Text>
       <Text style = {styles.lista}>
       - Procure uma ajuda especializada, como um advogado especializado em direito digital.
       </Text>

       <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
       </View>

    </View>

    </ScrollView>
 
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Direito')}>
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
  titulo: {
    width: 330,
    height: 130,
    marginTop: 150,
    marginLeft: 35,
    marginBottom: 30,
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

export default LeiCarolinaScreen;