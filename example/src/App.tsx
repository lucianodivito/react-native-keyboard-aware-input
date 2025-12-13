import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ScrollView,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareInput } from 'react-native-keyboard-aware-input';
import { MaterialIcons } from '@expo/vector-icons';

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

          <KeyboardAwareInput
            placeholder="Teléfono"
            keyboardType="phone-pad"
            inputStyle={styles.input}
          />

          <KeyboardAwareInput
            containerStyle={{
              borderTopWidth: 1.5,
              borderTopColor: '#eee',
            }}
            placeholder="Advanced usage"
            inputStyle={styles.input}
            renderCloseButton={
              <TouchableOpacity style={styles.searchButton}>
                <MaterialIcons
                  name="search"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.searchButtonText}>Buscar</Text>
              </TouchableOpacity>
            }
            onCloseCustom={(value, close) => {
              Alert.alert('Actual value:', value);
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

  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#333',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },

  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
