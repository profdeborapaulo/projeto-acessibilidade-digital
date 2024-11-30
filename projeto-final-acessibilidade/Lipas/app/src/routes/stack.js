import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import MariaFelipaScreen from "../screens/mariaFelipa";
import CadastroScreen from "../screens/cadastro";
import BotaoPanicoScreen from "../screens/botaoPanico";
import ManualDeDefesaScreen from "../screens/manualDefesa"
import DireitoScreen from "../screens/cardDireito";
import LeiMariaScreen from "../screens/leiMaria";
import LeiCarolinaScreen from "../screens/leiCarolina";
import LeiMinutoScreen from "../screens/leiMinuto";
import LeiJoannaScreen from "../screens/leiJoanna";
import LeiFeminicidioScreen from "../screens/leiFeminicidio";
import LeiImportunacaoScreen from "../screens/leiImportunacao";
import LeiSinalScreen from "../screens/leiSinal";
import LeiMarianaScreen from "../screens/leiMariana";
import LeiStalkingScreen from "../screens/leiStalking";
import AutodefesaScreen from "../screens/cardAutodefesa";
import SocorrosScreen from "../screens/cardSocorros";
import DesmaioScreen from "../screens/situDesmaio";
import QueimadurasScreen from "../screens/situQueimaduras";
import FraturasScreen from "../screens/situFraturas";
import ChoqueScreen from "../screens/situChoque";
import ConvulsoesScreen from "../screens/situConvulsoes";
import AfogamentosScreen from "../screens/situAfogamentos";
import HemorragiaScreen from "../screens/situHemorragia";
import EncontroScreen from "../screens/cardEncontro";
import NumerosScreen from "../screens/cardNumeros";
import DigitalScreen from "../screens/cardDigital";
import CyberScreen from "../screens/cardCyber";
import FurtoScreen from "../screens/cardFurto";

import DrawerNavigator from "./drawer";

import SobreScreen from "../screens/sobre";
import TermosCondicoesScreen from "../screens/termos";
import PrivacyPolicyScreen from "../screens/politica";
import ConfigScreen from "../screens/configuracao";

import ContatoScreen from "../screens/contato";
import ContatoComum from "../screens/usucomum";
import ContatoLipas from "../screens/usuLipas";

import Permissions from "../screens/permissao";

const Stack = createNativeStackNavigator();

function StackNavigator({ onLoginSuccess }) {
  return (
    <Stack.Navigator initialRouteName="MariaFelipa">
      <Stack.Screen
        name="MariaFelipa"
        component={MariaFelipaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <LoginScreen {...props} onLoginSuccess={onLoginSuccess} />}
      </Stack.Screen>
      <Stack.Screen
        name="BotaoPanico"
        component={BotaoPanicoScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="HomeStack"
        component={DrawerNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='ManualDeDefesa' 
        component={ManualDeDefesaScreen} 
        options={{ headerShown: false }}/>

    <Stack.Screen 
        name='Direito' 
        component={DireitoScreen} 
        options={{ headerShown: false }}/>
    <Stack.Screen 
        name='LeiMaria' 
        component={LeiMariaScreen} 
        options={{ headerShown: false }}/>
    <Stack.Screen 
        name='LeiCarolina' 
        component={LeiCarolinaScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiMinuto' 
        component={LeiMinutoScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiJoanna' 
        component={LeiJoannaScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiFeminicidio' 
        component={LeiFeminicidioScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiImportunacao' 
        component={LeiImportunacaoScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiSinal' 
        component={LeiSinalScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiMariana' 
        component={LeiMarianaScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='LeiStalking' 
        component={LeiStalkingScreen} 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name='Autodefesa' 
        component={AutodefesaScreen} 
        options={{ headerShown: false }}/>
      
      <Stack.Screen 
        name='Encontro' 
        component={EncontroScreen} 
        options={{ headerShown: false }}/> 

      <Stack.Screen 
        name='Digital' 
        component={DigitalScreen} 
        options={{ headerShown: false }}/> 

      <Stack.Screen 
        name='Cyber' 
        component={CyberScreen} 
        options={{ headerShown: false }}/> 

        <Stack.Screen 
        name='Furto' 
        component={FurtoScreen} 
        options={{ headerShown: false }}/> 


      <Stack.Screen 
        name='Socorros' 
        component={SocorrosScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='Desmaio' 
        component={DesmaioScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='Queimaduras' 
        component={QueimadurasScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='Fraturas' 
        component={FraturasScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='ChoqueEletrico' 
        component={ChoqueScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='Convulsoes' 
        component={ConvulsoesScreen} 
        options={{ headerShown: false }}/>  
      <Stack.Screen 
        name='Afogamentos' 
        component={AfogamentosScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name='HemorragiaNasal' 
        component={HemorragiaScreen} 
        options={{ headerShown: false }}/>
        
      <Stack.Screen 
        name='Numeros' 
        component={NumerosScreen} 
        options={{ headerShown: false }}/>

     <Stack.Screen 
        name='Sobre' 
        component={SobreScreen} 
        options={{ headerShown: false }}/>     

      <Stack.Screen 
        name='Termos' 
        component={TermosCondicoesScreen} 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name='Politica' 
        component={PrivacyPolicyScreen} 
        options={{ headerShown: false }}/>
   
      <Stack.Screen 
        name='Configuracao' 
        component={ConfigScreen} 
        options={{ headerShown: false }}/>

        <Stack.Screen
        name='Contato'
        component={ContatoScreen}
        options={{headerShown: false}}/>

        <Stack.Screen
        name='usucomum'
        component={ContatoComum}
        options={{headerShown: false}}/>

       <Stack.Screen
        name='usuLipas'
        component={ContatoLipas}
        options={{headerShown: false}}/>

       <Stack.Screen
         name='Permissions'
        component={Permissions}
        options={{headerShown: false}}/>

      
       </Stack.Navigator>
  );
}

export default StackNavigator;