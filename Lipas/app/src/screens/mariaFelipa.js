import React, { useState, useCallback, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function MariaFelipaScreen({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_700Bold,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_400Regular,
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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../assets/maria_felipa.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../assets/borboleta.png")}
          style={styles.borboleta}
        />
        <View style={styles.textContainer}>
          <Text style={styles.texto}>
            Este app tem o objetivo de empoderar mulheres através da segurança e
            autoconfiança.
          </Text>
       
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
          <Image
          source={require("../assets/seta_direita.png")}
          style={styles.seta}
        />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  borboleta: {
    width: 0.2 * Dimensions.get("window").width,
    height: 0.2 * Dimensions.get("window").width,
    marginTop: 20,
  },
  texto: {
    fontSize: 0.087 * Dimensions.get("window").width,
    color: "#FFECE3",
    fontFamily: "Inter_700Bold",
    marginHorizontal: 20,
    marginTop: height * 0.50,
  },
  seta: {
    width: width * 0.08,
    height: width * 0.135,
    marginLeft: width * 0.85,
    position: "absolute", 
  },
});
