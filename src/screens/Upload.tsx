import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Text, IconButton, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import { supabase } from '../api/supabaseClient';

// REUTILIZAMOS TUS ESTILOS
import { tasksStyles as styles } from '../styles/taskCard.styles'; 

const Upload = ({ route, navigation }: any) => {
  const { tareaId, titulo } = route.params; 
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const handlePickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ 
      type: 'application/pdf',
      copyToCacheDirectory: true 
    });
    if (!result.canceled) setFile(result.assets[0]);
  };

  const handleUpload = async () => {
    if (!file) return Alert.alert("Error", "Selecciona un archivo mrd");
    
    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `entregas/${fileName}`;

      // --- PASO 1: LEER EL ARCHIVO USANDO XHR (Solución para Network Request Failed) ---
      const blob: any = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Fallo al leer el archivo local"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", file.uri, true);
        xhr.send(null);
      });

      // --- PASO 2: SUBIR AL STORAGE (Bucket: entregas_tareas) ---
      const { data, error: uploadError } = await supabase.storage
        .from('entregas_tareas') 
        .upload(filePath, blob, {
          contentType: 'application/pdf',
          upsert: true
        });

      if (uploadError) throw uploadError;

      // --- PASO 3: REGISTRO EN LA TABLA 'ENTREGAS' ---
      const { error: dbError } = await supabase
        .from('entregas')
        .insert([{ 
            tarea_id: tareaId, 
            archivo_url: filePath,
            estudiante_id: 1 // Asegúrate de que este ID sea válido en tu DB
        }]);

      if (dbError) throw dbError;

      // Limpiar memoria
      if (blob.close) blob.close();

      Alert.alert("Éxito", "Tarea enviada correctamente", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);

    } catch (e: any) {
      Alert.alert("Fallo", e.message);
      console.error("DEBUG COMPLETO:", e);
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton 
          icon="arrow-left" 
          onPress={() => navigation.goBack()} 
          iconColor="#6200ee" 
        />
        <Text variant="titleLarge" style={styles.headerTitle}>Subir Tarea</Text>
        <View style={{ width: 48 }} />
      </View>

      <View style={{ padding: 20 }}>
        <Surface style={{ padding: 25, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', elevation: 4 }}>
          <Text variant="headlineSmall" style={{ marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }}>
            {titulo}
          </Text>
          
          <IconButton icon="file-pdf-box" size={80} iconColor="#ff4444" />
          
          <Text variant="bodyMedium" numberOfLines={1} style={{ marginBottom: 20, color: file ? '#000' : '#888' }}>
            {file ? file.name : "No has seleccionado ningún PDF"}
          </Text>
          
          <Button 
            mode="outlined" 
            onPress={handlePickDocument} 
            style={{ width: '100%', borderColor: '#6200ee' }}
            textColor="#6200ee"
          >
            {file ? "Cambiar archivo" : "Elegir PDF"}
          </Button>

          <Button 
            mode="contained" 
            onPress={handleUpload} 
            loading={uploading} 
            disabled={uploading}
            style={{ marginTop: 15, width: '100%', backgroundColor: '#6200ee' }}
          >
            {uploading ? "Subiendo..." : "Entregar Tarea"}
          </Button>
        </Surface>
      </View>
    </SafeAreaView>
  );
};

export default Upload;