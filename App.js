import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

      <ImageBackground
        source={require('./assets/fondo.png')}
        style={styles.background}
      >
        <View style={styles.card}>
          <Image
            source={require('./assets/usuario.png')}
            style={styles.avatar}
          />
          <Text style={styles.nombre}>Jazmin Moguilner</Text>
          <Text style={styles.descripcion}>
            Estudiante de secundaria 
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Dejame tu mensaje"
            placeholderTextColor="#777"
            value={mensaje}
            onChangeText={setMensaje}
          />

          <TouchableOpacity
            onPress={() => alert('Tu mensaje fue recibido')}
            style={styles.boton}
          >
            <Text style={styles.botonTexto}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    color: '#000',
  },
  boton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  botonSecundario: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  botonSecundarioTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
