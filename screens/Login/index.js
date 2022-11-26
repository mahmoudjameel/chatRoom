import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { InputStyle, Loading } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { IMAGES } from "../../contains";

import { AuthContext } from "../../navigation/AuthProvider";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const changeRegister = () => {
    navigation.navigate("SignUp");
  };

  const onLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          style={styles.imgLogo}
          source={require("../../assets/images/a.png")}
        />
      </View>
      <View style={styles.boxTextLogo}>
        <Text style={styles.textLogo}>APP ROOM CHAT</Text>
      </View>
      <View style={styles.boxInput}>
        <InputStyle
          name={"Email"}
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <InputStyle
          name={"Password"}
          value={password}
          onChange={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity onPress={onLogin} style={styles.btnLogin}>
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeRegister} style={styles.btnRegister}>
        <Text style={styles.textRegister}>Create New Account</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
      
      </View>
    </View>
  );
};

export default LoginScreen;
