import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from './ThemeContext'; 

const SobreScreen = ({ navigation }) => {
  const [expandedSections, setExpandedSections] = useState({
    sobreLipas: false,
    quemEsta: false,
    sobreProjeto: false,
    geolocalizacao: false,
    funcoesSOS: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const { theme, switchTheme } = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.iconPlaceholder} />
        </View>

        <Text style={styles.description}>Saiba mais sobre o Lipa's e suas funcionalidades</Text>

         <View style={styles.section}> 
          <TouchableOpacity style={styles.seccao} onPress={() => toggleSection('sobreLipas')}>
         <Text style={styles.sectionTitle}>Sobre o Lipa’s</Text>
          <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
          {expandedSections.sobreLipas && <Text style={styles.sectionContent}>O Lipa’s tem como objetivo assegurar a segurança feminina, que busca reduzir os índices de assédios e abusos, tornando o mundo um lugar mais seguro para todos</Text>}
           </View>
          
        

        <View style={styles.section}>
         <TouchableOpacity style={styles.seccao} onPress={() => toggleSection('quemEsta')}>
            <Text style={styles.sectionTitle}>Quem está por trás do Lipa’s</Text>
            <Text style={styles.arrow}>›</Text>
         </TouchableOpacity>
          {expandedSections.quemEsta && <Text style={styles.sectionContent}>O Lipa’s é um Trabalho de Conclusão de Curso (TCC), feito por 5 alunas do curso Informática para Internet da escola ETEC Antônio Furlan. Para o nosso TCC, queríamos trazer uma solução para um problema atual, onde teríamos propriedade de fala, que ja presenciamos, pra trazer uma solução realmente eficiente.</Text>}
        </View>


        <View style={styles.section}>
        <TouchableOpacity style={styles.seccao} onPress={() => toggleSection('sobreProjeto')}>
            <Text style={styles.sectionTitle}>Sobre o Projeto</Text>
            <Text style={styles.arrow}>›</Text>
         </TouchableOpacity>
          {expandedSections.sobreProjeto && <Text style={styles.sectionContent}>O Lipa’s foi desenvolvido por meio de escuta de pessoas de diferentes idades, raças e classes sociais que compartilharam suas experiências e experiências de pessoas próximas através de um formulário durante o processo de elaboração do app.</Text>}
        </View>

        <View style={styles.section}>
        <TouchableOpacity style={styles.seccao} onPress={() => toggleSection('geolocalizacao')}>
            <Text style={styles.sectionTitle}>Geolocalização</Text>
            <Text style={styles.arrow}>›</Text>
         </TouchableOpacity>
          {expandedSections.geolocalizacao && <Text style={styles.sectionContent}>O Lipa’s permite a localização em tempo real, onde você pode compartilhar sua localização com seu contato de emergência (Sendo usuário Lipa’s), assim trazendo mais segurança e conforto.</Text>}
        </View>

        <View style={styles.section}>
        <TouchableOpacity style={styles.seccao} onPress={() => toggleSection('funcoesSOS')}>
            <Text style={styles.sectionTitle}>Funções SOS</Text>
            <Text style={styles.arrow}>›</Text>
         </TouchableOpacity>   
          {expandedSections.funcoesSOS && <Text style={styles.sectionContent}>Botão pânico para acionar até três pessoas de sua confiança para que receba uma mensagem quando você estiver em perigo, além de um botão para ligar para a polícia.</Text>}
        </View>

        <TouchableOpacity style={styles.termbutton} onPress={() => navigation.navigate('Termos')}>
          <Text style={styles.buttonText}>Termos e Política</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        {/* Footer icons */}
        <View style={styles.footerIconPlaceholder}>
          {/* Icon 1 */}
        </View>
        <View style={styles.footerIconPlaceholder}>
          {/* Icon 2 */}
        </View>
        <View style={styles.footerIconPlaceholder}>
          {/* Icon 3 */}
        </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E5DC',
  },
  headerText: {
    color: '#F7E5DC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    margin: 20,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#631C1C',
    paddingVertical: 12,
    paddingTop: 2,
    borderColor: '#DDC2BB',
    borderBottomWidth: 1,
    paddingVertical: 30,
    paddingTop: 1,
  },
  section: {
    marginHorizontal: 11,
    marginVertical: 7,
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    paddingVertical: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#832A25',
    paddingVertical: 1,
    fontFamily: 'Inter_700Bold',
  },
    sectionContent: {
    fontSize: 22,
    color: '#631C1C',
    paddingVertical: 1,
    marginVertical: 1,
    marginLeft: 12,
  },
  termbutton: {
    borderColor: '#631C1C',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
      fontFamily: 'Inter_700Bold',
      color: '#631C1C',
      fontSize: 20,
      marginEnd: 10,
  },
  privacibutton:{
    borderColor: '#631C1C',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 50,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 29,
    
  },
  arrow: {
    fontSize: 40,
    color: '#832A25',
  },
  seccao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
});

export default SobreScreen;
