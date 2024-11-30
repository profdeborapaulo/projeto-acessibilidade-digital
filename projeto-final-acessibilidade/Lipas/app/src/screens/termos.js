import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

const FirstRoute = () => (
  <ScrollView style={styles.scrollContainer}>
    <Text style={styles.titulotopico}>1. Aceitação dos Termos</Text>
    <Text style={styles.texto}>
      Ao fazer o download, instalar ou usar o aplicativo “Lipa’s”, você concorda em cumprir estes termos e condições. Se você não concorda com eles, por favor, não use o aplicativo.
    </Text>
    <Text style={styles.titulotopico}>2. Uso Responsável</Text>
    <Text style={styles.texto}>
      O aplicativo “Lipa’s” destina-se a ser utilizado por mulheres e seus cuidadores para garantir a segurança pessoal. Você concorda em utilizar o aplicativo de maneira responsável, respeitando os direitos e a privacidade de outros usuários.
    </Text>
    <Text style={styles.titulotopico}>3. Conteúdo gerado pelo usuário</Text>
    <Text style={styles.texto}>
      O “Lipa’s” oferece os seguintes recursos:
      {'\n'}
      • Botão de Pânico: Permite que você envie alertas de emergência para contatos predefinidos.{'\n'}
      • Geolocalização em Tempo Real: Rastreia sua localização para fornecer assistência em caso de necessidade.{'\n'}
      • Manual de Defesa: Fornece informações sobre autodefesa e segurança pessoal.{'\n'}
      • Contatos de Emergência: Armazena informações de contato para uso em situações de emergência.
    </Text>
    <Text style={styles.titulotopico}>4. Uso de Geolocalização</Text>
    <Text style={styles.texto}>
      O aplicativo pode utilizar serviços de geolocalização para fornecer melhores funcionalidades.
    </Text>
    <Text style={styles.titulotopico}>5. Propriedade Intelectual</Text>
    <Text style={styles.texto}>
      Todos os direitos de propriedade intelectual relacionados ao aplicativo “Lipa’s” são de nossa propriedade ou licenciados para nós. Você concorda em não copiar, modificar, distribuir ou reproduzir qualquer conteúdo do aplicativo sem nossa autorização prévia por escrito.
    </Text>
    <Text style={styles.titulotopico}>6. Responsabilidade Limitada</Text>
    <Text style={styles.texto}>
      O aplicativo “Lipa’s” é fornecido “como está”, sem garantias de qualquer tipo. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do aplicativo.
    </Text>
    <Text style={styles.titulotopico}>7. Modificações dos Termos e Condições</Text>
    <Text style={styles.texto}>
      Podemos modificar estes termos e condições a qualquer momento, sem aviso prévio. É responsabilidade do usuário verificar periodicamente se houve alterações. O uso contínuo do aplicativo após as modificações indica que você concorda com os termos atualizados.
    </Text>
    <Text style={styles.titulotopico}>8. Encerramento do Acesso</Text>
    <Text style={styles.texto}>
      Reservamo-nos o direito de encerrar ou suspender seu acesso ao aplicativo “Lipa’s”, a nosso critério, sem aviso prévio, caso você viole estes termos e condições.
    </Text>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={styles.scrollContainer}>
    <Text style={styles.subtitulo}>Política de Privacidade do Aplicativo Lipa’s</Text>
    <Text style={styles.introducao2}>
      No Lipa’s, privacidade e segurança são prioridades, e nos comprometemos com a transparência no tratamento dos dados pessoais dos nossos usuários/clientes.
    </Text>
    <Text style={styles.titulotopico}>1. Informações coletadas</Text>
    <Text style={styles.texto}>
      - O aplicativo “Lipa’s” coleta informações como nome, endereço de e-mail, número de telefone e localização.
      {'\n'}- Esses dados são usados para fornecer os serviços do aplicativo, como o botão de pânico e a geolocalização em tempo real.
    </Text>
    <Text style={styles.titulotopico}>2. Uso Responsável</Text>
    <Text style={styles.texto}>
      O aplicativo “Lipa’s” destina-se a ser utilizado por mulheres e seus cuidadores para garantir a segurança pessoal. Você concorda em utilizar o aplicativo de maneira responsável, respeitando os direitos e a privacidade de outros usuários.
    </Text>
    <Text style={styles.titulotopico}>3. Conteúdo gerado pelo usuário</Text>
    <Text style={styles.texto}>
      O “Lipa’s” oferece os seguintes recursos:
      {'\n'}- Botão de Pânico: Permite que você envie alertas de emergência para contatos predefinidos.{'\n'}
      - Geolocalização em Tempo Real: Rastreia sua localização para fornecer assistência em caso de necessidade.{'\n'}
      - Manual de Defesa: Fornece informações sobre autodefesa e segurança pessoal.{'\n'}
      - Contatos de Emergência: Armazena informações de contato para uso em situações de emergência.
    </Text>
    <Text style={styles.titulotopico}>4. Uso de Geolocalização</Text>
    <Text style={styles.texto}>
      O aplicativo pode utilizar serviços de geolocalização para fornecer melhores funcionalidades.
    </Text>
    <Text style={styles.titulotopico}>5. Acesso e controle de informações</Text>
    <Text style={styles.texto}>
      Você pode acessar e atualizar suas informações pessoais nas configurações do aplicativo. Também pode solicitar a exclusão de suas informações pessoais, entrando em contato conosco através dos canais de suporte fornecidos no aplicativo.
    </Text>
    <Text style={styles.titulotopico}>6. Retenções das informações</Text>
    <Text style={styles.texto}>
      O aplicativo "Lipa’s" manterá suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que uma retenção mais longa seja exigida ou permitida por lei.
    </Text>
    <Text style={styles.titulotopico}>7. Crianças</Text>
    <Text style={styles.texto}>
      O aplicativo "Lipa’s" não se destina a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que coletamos informações de uma criança sem o consentimento dos pais, entre em contato conosco para que possamos remover essas informações.
    </Text>
    <Text style={styles.titulotopico}>8. Alteração nas políticas de privacidade</Text>
    <Text style={styles.texto}>
      Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta Política de Privacidade regularmente para estar ciente de quaisquer alterações. O uso continuado do aplicativo após a publicação das alterações significa que você concorda com os termos revisados da Política de Privacidade.
    </Text>
    <Text style={styles.titulotopico}>9. Contato</Text>
    <Text style={styles.texto}>
      Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre o uso de suas informações pessoais pelo aplicativo "Lipa’s", entre em contato conosco através dos canais de suporte fornecidos no aplicativo.
      {'\n'}{' '}
      Ao utilizar o aplicativo "Lipa’s", você concorda com a coleta, uso e compartilhamento de suas informações pessoais conforme descrito nesta Política de Privacidade.
    </Text>
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TermosCondicoesScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Termos e Condições' },
    { key: 'second', title: 'Política de Privacidade' },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seta}>
        <Icon name="chevron-back-outline" size={60} color="#FFEDE3" onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      <View style={styles.container2}>
        <Text style={styles.titulo}>Termos e Condições</Text>
        <Text style={styles.introducao}>
          Bem-vinda ao aplicativo “Lipa’s”! Ao utilizar nosso aplicativo, você concorda em cumprir os seguintes termos e condições. Por favor, leia atentamente antes de usar o aplicativo.
        </Text>
        <TabView
          style={styles.tabview}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#49070A', height: 3 }}
              style={{ backgroundColor: '#FFEDE3' }}
              labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              tabStyle={{ width: 190 }}
              renderLabel={({ route, focused }) => (
                <Text style={{ color: focused ? '#49070A' : '#49070A50', fontSize: 18 }}>
                  {route.title}
                </Text>
              )}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49070A',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFEDE3',
  },
  borboleta: {
    width: 70,
    height: 70,
    marginStart: 170,
    marginVertical: 25,
    position: 'absolute',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFEDE3',
    borderWidth: 1,
    borderColor: '#640F1480',
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    padding: 20,
    marginTop: 20,
  },
  titulo: {
    fontSize: 42,
    color: '#631C1C',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    marginTop: 20,
  },
  introducao: {
    marginTop: 15,
    fontSize: 18,
    marginHorizontal: 20,
    color: '#49070A',
    fontFamily: 'Inter_400Regular',
    marginBottom: 20,
  },
  tabview: {
    width: '100%',
  },
  subtitulo: {
    fontSize: 30,
    color: '#631C1C',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    marginTop: 20,
  },
  introducao2: {
    marginTop: 15,
    fontSize: 18,
    marginHorizontal: 10,
    color: '#49070A',
    fontFamily: 'Inter_400Regular',
    marginBottom: 20,
  },
  titulotopico: {
    fontSize: 20,
    color: '#49070A',
    marginHorizontal: 20,
    textAlign: 'left',
    fontFamily: 'Inter_700Bold',
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    color: '#49070A',
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 10,
    fontFamily: 'Inter_400Regular',
  },
  seta: {
    marginTop: 25,
    marginLeft: 10,
  },
});

export default TermosCondicoesScreen;