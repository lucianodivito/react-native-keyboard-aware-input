import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, StyleSheet, Alert, View } from 'react-native';
import { KeyboardAwareInput } from 'react-native-keyboard-aware-input';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>KeyboardAwareInput Demo</Text>

          {/* 1. Input común */}
          <KeyboardAwareInput
            placeholder="Nombre completo"
            inputStyle={styles.input}
            showBackdrop
          />

          {/* 2. Email */}
          <KeyboardAwareInput
            placeholder="Email"
            keyboardType="email-address"
            inputStyle={styles.input}
          />

          {/* 3. Contraseña */}
          <KeyboardAwareInput
            placeholder="Contraseña"
            secureTextEntry
            inputStyle={styles.input}
          />

          {/* 4. Teléfono */}
          <KeyboardAwareInput
            placeholder="Teléfono"
            keyboardType="phone-pad"
            inputStyle={styles.input}
          />

          {/* 5. Comentario multiline */}
          <KeyboardAwareInput
            placeholder="Comentario"
            multiline
            numberOfLines={4}
            inputStyle={styles.input}
          />

          {/* 6. Botón de cerrar custom */}
          <KeyboardAwareInput
            placeholder="Botón custom"
            inputStyle={styles.input}
            closeButtonStyle={styles.customCloseButton}
            renderCloseButton={
              <View style={styles.customCloseButton}>
                <Text style={styles.customButtonText}>Ok</Text>
              </View>
            }
            onCloseCustom={(value, close) => {
              Alert.alert('Valor actual:', value);
              close();
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f2f3f5',
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a1a1a',
  },

  // Estilo uniforme para todos los inputs
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#333',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },

  // Botón de cerrar custom
  customCloseButton: {
    backgroundColor: '#4f94ff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  customButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // Right element
  rightElementText: {
    fontSize: 18,
    marginLeft: 8,
  },
});
