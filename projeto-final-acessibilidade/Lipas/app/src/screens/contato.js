import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext'; 

const ContatoScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
     <TouchableOpacity style={styles.buttonicon} onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.icon} name="arrow-back-ios" size={40} color="#49070A" />
      </TouchableOpacity>

      <View style={styles.container2}>
        <Text style={styles.title}>Qual usuário é o seu contato de emergência?</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('usucomum')}> 
          <Text style={styles.buttonText}>Usuário Comum</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('usuLipas')}> 
          <Text style={styles.buttonText}>Usuário Lipa’s</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.infoText}>
            • <Text style={styles.bold}>Usuário Comum:</Text> É a pessoa que não tem cadastro em nosso aplicativo.
          </Text>
          <Text style={styles.infoText}>
            • <Text style={styles.bold}>Usuário Lipa’s:</Text> É a pessoa que tem o cadastro em nosso aplicativo.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b000e',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  container2: {
    width: '100%',
    backgroundColor: '#FAE9E4',
    borderRadius: 16,
    padding: 20,
    height: '52%',
    marginVertical: 140,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Inter_600SemiBold',
    color: '#640F14',
    textAlign: 'center',
    marginBottom: 24,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#640F14',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#49070A',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  info: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 15,
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
    color: '#49070A',
    textAlign: 'center',
  },
  bold: {
    fontFamily: 'Inter_700Bold',
    color: '49070A',
  },
  icon:{
   marginLeft: 'auto',
  },
  buttonicon:{
    backgroundColor: '#FAE9E4',
    marginTop: 10,
    marginLeft: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContatoScreen;
