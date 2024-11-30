import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext'; 

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import {
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-display';
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

const PrivacyPolicyScreen = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const { theme, switchTheme } = useTheme();
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_700Bold,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_400Regular,
          DMSerifDisplay_400Regular,
          DMSerifDisplay_400Regular_Italic,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/icons/borb-icon.png')} style={styles.borb} />
              </TouchableOpacity>
      <View style={styles.container2}>
      </View>

      <View style={styles.section}>
        <Text style={styles.Title}>Política de Privavidade do app Lipa´s</Text>
</View>
      <Text style={styles.instructions}>
      No Lipa’s, privacidade e segurança são prioridades, e nos comprometemos com a transparência no tratamento dos dados pessoais dos nossos usuários/clientes.
      </Text>

        {/* Botões de navegação para "Termos de Condições" e "Política de Privacidade" */}
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Termos')}>
            <Text style={styles.buttonText}>Termos e Condições</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Politica')}>
            <Text style={styles.buttonText}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>1. Informações coletadas</Text>
      <Text style={styles.paragraph}>•O aplicativo “Lipa’s” coleta informações como nome, endereço de e-mail, número de telefone e localização.{'\n'}
      <Text style={styles.paragraph}>•Esses dados são usados para fornecer os serviços do aplicativo, como o botão de pânico e a geolocalização em tempo real.
        </Text>
        </Text>

        <Text style={styles.sectionTitle}>2. Uso Responsável</Text>
        <Text style={styles.paragraph}>
        O aplicativo “Lipa’s” destina-se a ser utilizado por mulheres e seus cuidadores para garantir a segurança pessoal. Você concorda em utilizar o aplicativo de maneira responsável, respeitando os direitos e a privacidade de outros usuários.
        </Text>

        <Text style={styles.sectionTitle}>3. Conteúdo gerado pelo usuário</Text>
        <Text style={styles.paragraph}>
        O “Lipa’s” oferece os seguintes recursos:{'\n'}{'\n'}
      
      <Text style={styles.paragraph}>•Botão de Pânico: Permite que você envie alertas de emergência para contatos predefinidos.</Text>{'\n'}
      <Text style={styles.paragraph}>•Geolocalização em Tempo Real: Rastreia sua localização para fornecer assistência em caso de necessidade.</Text>{'\n'}
      <Text style={styles.paragraph}>•Manual de Defesa: Fornece informações sobre autodefesa e segurança pessoal.</Text>{'\n'}
      <Text style={styles.paragraph}>•Contatos de Emergência: Armazena informações de contato para uso em situações de emergência.</Text>
</Text>

        <Text style={styles.sectionTitle}>4. Uso de Geolocalização</Text>
        <Text style={styles.paragraph}>
          O aplicativo pode utilizar serviços de geolocalização para fornecer melhores funcionalidades.
        </Text>

        <Text style={styles.sectionTitle}>5. Acesso e controle de informações</Text>
        <Text style={styles.paragraph}>
        Você pode acessar e atualizar suas informações pessoais nas configurações do aplicativo. Também pode solicitar a exclusão de suas informações pessoais, entrando em contato conosco através dos canais de suporte fornecidos no aplicativo.
        </Text>

        <Text style={styles.sectionTitle}>6. Retenções das informações</Text>
        <Text style={styles.paragraph}>
        O aplicativo "Lipa’s" manterá suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que uma retenção mais longa seja exigida ou permitida por lei.
        </Text>

        <Text style={styles.sectionTitle}>7. Crianças</Text>
        <Text style={styles.paragraph}>
        O aplicativo "Lipa’s" não se destina a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que coletamos informações de uma criança sem o consentimento dos pais, entre em contato conosco para que possamos remover essas informações.
        </Text>

        <Text style={styles.sectionTitle}>8. Alteração nas políticas de prvacidade</Text>
        <Text style={styles.paragraph}>
        Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta Política de Privacidade regularmente para estar ciente de quaisquer alterações. O uso continuado do aplicativo após a publicação das alterações significa que você concorda com os termos revisados da Política de Privacidade.
        </Text>

        <Text style={styles.sectionTitle}>9. Contato</Text>
        <Text style={styles.paragraph}>
        Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre o uso de suas informações pessoais pelo aplicativo "Lipa’s", entre em contato conosco através dos canais de suporte fornecidos no aplicativo.{'\n'}{'\n'}

        <Text style={styles.paragraph}>Ao utilizar o aplicativo "Lipa’s", você concorda com a coleta, uso e compartilhamento de suas informações pessoais conforme descrito nesta Política de Privacidade.
        </Text>
        </Text>
        <View style={styles.combo}>
       </View>
    </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#49070A',
    width: '100%',
    height: '100%',
  },
  container2: {
      flex: 1, 
      backgroundColor: '#FFEDE3',
      width: '100%',
      height: 4000,
      marginVertical: 100,
      borderWidth:1,
      borderColor: '#640F1480',
      borderRadius: 50,
      position: 'absolute',
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  scrollViewContent: {
    padding: 20,
    marginBottom: 23,
  },
  paragraph: {
    fontSize: 16,
    color: '#791227',
    textAlign: 'auto',
    marginVertical: 10,
    marginLeft: 20,
    marginVertical: 1,
    marginBottom: 35,
    fontFamily: 'Inter_400Regular',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#49070A',
    marginHorizontal: 20,
    textAlign: 'auto',
    fontFamily: 'Inter_700Bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    borderColor: '#631C1C',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 130,
    paddingVertical: 22,
    paddingHorizontal: 17,
    borderRadius: 19,
  },
  buttonText: {
    color: '#631C1C',
    fontSize: 18,
   textAlign: 'center',
   fontFamily: 'Inter_600SemiBold',
  },
  instructions: {
    marginTop: 15,
    fontSize: 16,
    marginHorizontal: 20,
    color: '#7C1C1C',
    fontFamily: 'Inter_400Regular',
  },
  Title: {
    fontSize: 35,
    color: '#631C1C',
    textAlign: 'center',
    marginTop: 1,
    borderColor: '#DDC2BB',
    fontFamily: 'Inter_700Bold',
    },
    borb: {
      width: 70,
      height: 70,
      marginStart: 170,
      marginVertical: 26,
    },
    combo: {
      flexDirection: 'row', // Alinha os itens na horizontal
      justifyContent: 'space-evenly', // Espaça os itens uniformemente
      padding: 10,
    },
});

export default PrivacyPolicyScreen;