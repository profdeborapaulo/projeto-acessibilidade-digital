import {StyleSheet, View, PermissionsAndroid, Platform, TouchableOpacity, Text } from 'react-native'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigation } from "@react-navigation/native";


const Permissions = () => {
  const [permissionAdvanced, setPermissionsAdvanced] = useState(false)
  const [permissionSimple, setPermissionsSimple] = useState(false)
  const navigation = useNavigation()


console.log(permissionSimple, permissionAdvanced)

useEffect(()=>{
    if(permissionAdvanced && permissionSimple){
        navigation.navigate('HomeStack') 
    }
}, [permissionAdvanced, permissionSimple])


async function requestLocationPermission() {
    setPermissionsSimple(true)

    try {
      const foregroundGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      
      if (foregroundGranted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionsSimple(true)

      } else {
        setPermissionsSimple(false)
      }
      setPermissionsSimple(true)
    } catch (err) {
      console.warn(err);
    }
}


async function requestAdvancedPermission() {
    setPermissionsAdvanced(true)
    try {
        if (Platform.Version >= 29) {
            const backgroundGranted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
            )
            if (backgroundGranted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermissionsAdvanced(true)
            } else {
                setPermissionsAdvanced(false)
            }
          }
          else {
            setPermissionsAdvanced(true)
          }
    } catch (err) {
        console.warn(err)
    }
}


  return (
    <View style={styles.permissions}>
                <Text style={styles.titulo}>
                    Localização
                </Text>
                {!permissionSimple ?
                <>
                    <Text style={styles.numero}>1</Text>
                    <Text style={styles.passo}>Passo 1 de 2</Text>
                    <Text style={styles.texto}>
                        O Lipa's precisa acessar a localização do seu dispositivo para ter a sua localização em tempo real.{'\n'}{'\n'}
                        Neste primeiro passo, um popup vai perguntar sobre sua permissão para a localização.
                        {'\n'} {'\n'}
                    </Text>
                    
                    <Text style={styles.texto}>Clique em "Durante o uso do app".</Text>
    
                    <TouchableOpacity onPress={()=>{requestLocationPermission()}} style={styles.button} >
                         <Text style={styles.buttonText}> Autorizar Passo 1 </Text>
                    </TouchableOpacity>
                </>
            : 
            null }
            {!permissionAdvanced && permissionSimple ?
                <>
                <Text style={styles.numero}>2</Text>
                <Text style={styles.passo}>Passo 2 de 2</Text>
                <Text style={styles.texto}>
                    Agora que você já autorizou o aplicativo a acessar a sua localização, precisamos autorizar o acesso com o dispositivo fechado. {'\n'}{'\n'}
                </Text>
                <Text style={styles.texto}>
                    Neste momento, vai abrir um popup com a tela de configurções de acesso do Lipa's, e algumas opções irão aparecer. {'\n'}{'\n'}
                </Text>
                
                <Text style={styles.texto}>Escolha a opção "Todo o tempo".</Text>

                <TouchableOpacity onPress={()=>{requestAdvancedPermission()}} style={styles.button}>
                  <Text style={styles.buttonText} >Autorizar Passo 2</Text>
                </TouchableOpacity>
            </>
            : null}
        </View>
  )
}

export default Permissions


const styles = StyleSheet.create({
    menuActive: {
      backgroundColor: '#640f14',
      width: '90%',
      paddingVertical: 5,
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    menuInActive: {
      width: '90%',
      paddingVertical: 5,
      alignItems: 'center',
      borderBottomWidth: 5,
      borderBottomColor: '#ffffff'
    },
    permissions: {
      position: 'absolute', 
      lex: 1, 
      height: '100%',
      top: 0, 
      left: 0, 
      padding: 40,
      paddingTop: 100,
      backgroundColor: '#640f14', 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      zIndex: 999
    },
    titulo:{
      fontFamily: 'DMSerifDisplay_400Regular',
      fontSize: 35,
      color: '#FFEDE3',
    },
    numero:{
      paddingTop: 40, 
      fontSize: 60,
      fontFamily: 'DMSerifDisplay_400Regular',
      color: '#FFEDE3',
    },
    passo:{
      paddingTop: 20, 
      paddingBottom: 40,
      fontFamily: 'DMSerifDisplay_400Regular',
      color: '#FFEDE3',
      fontSize: 18,
    },
    texto:{
      fontSize: 17,
      fontFamily: 'Inter_600SemiBold',
      color: '#FFEDE3',
    },
    button: {
      backgroundColor: "#FFEDE3",
      borderRadius: 40,
      padding: 20,
      marginTop: 40
    },
    buttonText: {
      fontFamily: 'Inter_700Bold', 
      fontSize: 18, 
      color: '#49070A', 
    },
  })