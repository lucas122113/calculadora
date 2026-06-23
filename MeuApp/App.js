import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [valor, setValor] = useState("0");

  const adicionar = (texto) => {
    if (valor === "0") {
      setValor(texto);
    } else {
      setValor(valor + texto);
    }
  };

  const limpar = () => {
    setValor("0");
  };

  const apagar = () => {
    if (valor.length === 1) {
      setValor("0");
    } else {
      setValor(valor.slice(0, -1));
    }
  };

  const calcular = () => {
    try {
      const resultado = eval(valor);
      setValor(String(resultado));
    } catch {
      setValor("Erro");
    }
  };

  const Botao = ({ texto, estilo, onPress }) => (
    <TouchableOpacity
      style={[styles.botao, estilo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>

        <View style={styles.visor}>
          <Text style={styles.textoVisor} numberOfLines={1}>
            {valor}
          </Text>
        </View>

        <View style={styles.linha}>
          <Botao texto="C" estilo={styles.cinza} onPress={limpar} />
          <Botao texto="⌫" estilo={styles.cinza} onPress={apagar} />
          <Botao texto="÷" estilo={styles.laranja} onPress={() => adicionar("/")} />
          <Botao texto="×" estilo={styles.laranja} onPress={() => adicionar("*")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="7" estilo={styles.numero} onPress={() => adicionar("7")} />
          <Botao texto="8" estilo={styles.numero} onPress={() => adicionar("8")} />
          <Botao texto="9" estilo={styles.numero} onPress={() => adicionar("9")} />
          <Botao texto="−" estilo={styles.laranja} onPress={() => adicionar("-")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="4" estilo={styles.numero} onPress={() => adicionar("4")} />
          <Botao texto="5" estilo={styles.numero} onPress={() => adicionar("5")} />
          <Botao texto="6" estilo={styles.numero} onPress={() => adicionar("6")} />
          <Botao texto="+" estilo={styles.laranja} onPress={() => adicionar("+")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="1" estilo={styles.numero} onPress={() => adicionar("1")} />
          <Botao texto="2" estilo={styles.numero} onPress={() => adicionar("2")} />
          <Botao texto="3" estilo={styles.numero} onPress={() => adicionar("3")} />
          <Botao texto="=" estilo={styles.laranja} onPress={calcular} />
        </View>

        <View style={styles.linha}>
          <TouchableOpacity
            style={[styles.botaoZero, styles.numero]}
            onPress={() => adicionar("0")}
          >
            <Text style={styles.texto}>0</Text>
          </TouchableOpacity>

          <Botao texto="." estilo={styles.numero} onPress={() => adicionar(".")} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "center",
  },

  calculadora: {
    width: 330,
    backgroundColor: "#111",
    borderRadius: 25,
    padding: 15,
  },

  visor: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 15,
  },

  textoVisor: {
    color: "#FFF",
    fontSize: 50,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },

  botao: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },

  botaoZero: {
    width: 136,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    paddingLeft: 25,
    marginHorizontal: 3,
  },

  numero: {
    backgroundColor: "#333",
  },

  cinza: {
    backgroundColor: "#A5A5A5",
  },

  laranja: {
    backgroundColor: "#FF9F0A",
  },

  texto: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "500",
  },
});