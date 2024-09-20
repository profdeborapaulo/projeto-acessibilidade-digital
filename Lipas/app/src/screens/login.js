import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";

// api fake localhost
const usersData = require("../services/api.json");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = usersData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigation.replace("Home");
    } else {
      setError("Credenciais inválidas, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/borboleta.png")} style={styles.borboleta} />
      <View style={styles.container2}>
        <Image source={require("../assets/titulo_login.png")} style={styles.titulo} />
        <View style={styles.email}>
          <Input
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#49070A98"
            leftIcon={{ type: "font-awesome", name: "user", color: "#49070A98" }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.senha}>
          <Input
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#49070A98"
            leftIcon={{ type: "font-awesome", name: "lock", color: "#49070A98" }}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <Text onPress={() => navigation.navigate("Cadastro")} style={styles.cadastre}>
          Não tem uma conta? Cadastre-se
        </Text>
        <TouchableOpacity onPress={handleLogin} style={styles.bottonentrar}>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("EsqueceuSenha")} style={styles.esqueceu}>
          Esqueceu a senha?
        </Text>
        <Image source={require("../assets/ou.png")} style={styles.ou} />
        <TouchableOpacity>
          <Image source={require("../assets/google.png")} style={styles.google} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49070A",
    width: "100%",
    height: "100%",
  },
  borboleta: {
    width: width * 0.4,
    height: width * 0.4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: height * 0.05,
  },
  container2: {
    position: "absolute",
    top: height * 0.28,
    width: "100%",
    height: height,
    backgroundColor: "#FFEDE3",
    borderRadius: 30,
    alignItems: "center",
  },
  titulo: {
    marginTop: height * 0.04,
    width: width * 0.39,
    height: width * 0.095,
  },
  email: {
    backgroundColor: "#FFFFFF",
    width: width * 0.9,
    height: height * 0.1,
    marginTop: height * 0.04,
    borderWidth: 1,
    borderColor: "#49070A",
    borderRadius: 20,
    padding: 10,
  },
  input: {
    fontSize: width * 0.05,
    fontFamily: "Inter_500Medium",
  },
  senha: {
    backgroundColor: "#FFFFFF",
    width: width * 0.9,
    height: height * 0.1,
    marginTop: height * 0.03,
    borderWidth: 1,
    borderColor: "#49070A",
    borderRadius: 20,
    padding: 10,
  },
  cadastre: {
    fontSize: width * 0.04,
    fontFamily: "Inter_700Bold",
    color: "#112947",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
  },
  bottonentrar: {
    marginTop: height * 0.04,
    width: width * 0.6,
    height: height * 0.08,
    backgroundColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  entrar: {
    color: "#FFEDE3",
    textAlign: "center",
    fontSize: width * 0.06,
    fontFamily: "Inter_600SemiBold",
  },
  esqueceu: {
    fontSize: width * 0.04,
    fontFamily: "Inter_700Bold",
    color: "#112947",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
  },
  ou: {
    width: width,
    height: height * 0.03,
    marginTop: height * 0.04,
  },
  google: {
    width: width * 0.15,
    height: width * 0.15,
    marginTop: height * 0.02,
  },
});
