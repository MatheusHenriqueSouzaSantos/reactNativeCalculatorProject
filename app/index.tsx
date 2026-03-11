import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{display: "flex", alignItems: "center"}}>
      <Text style={{fontSize: 25,
         textAlign: "center",
         marginTop: 10,
         backgroundColor: "black",
         color: "white",
         width: 350,
         height: 80,
         display: "flex",
         alignItems: "center",
         borderRadius: 15}}>
          Escolha uma Operação Básica A fazer no menu lateral
      </Text>
    </View>
  );
}

