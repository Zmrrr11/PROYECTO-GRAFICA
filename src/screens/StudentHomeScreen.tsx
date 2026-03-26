import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { supabase } from '../api/supabaseClient';

// IMPORTACIÓN DE COMPONENTES
import SubjectCard from '../components/MainScreen/SubjectCard';

// IMPORTACIÓN DE ESTILOS
import { studentHomeStyles as styles } from '../styles/studentHome.styles';

const StudentHomeScreen = ({ route, navigation }: any) => {
  // Parámetros recibidos del Login (con valores por defecto por seguridad)
  const { userName, gradoId } = route.params || { userName: 'Estudiante', gradoId: 1 };
  
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubjects();
  }, [gradoId]);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      
      // Consulta a la malla curricular para obtener las materias y sus imágenes
      const { data, error } = await supabase
        .from('malla_curricular')
        .select(`
          materias (
            id,
            nombre,
            imagen_url
          )
        `)
        .eq('grado_id', gradoId);

      if (error) throw error;
      
      // Formateamos la lista extrayendo el objeto interno de 'materias'
      const subjectsList = data?.map((item: any) => item.materias).filter(Boolean) || [];
      setSubjects(subjectsList);
      
    } catch (error: any) {
      Alert.alert("Error", "No se pudieron cargar tus materias.");
      console.error("Supabase Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* CABECERA DINÁMICA */}
      <View style={styles.header}>
        <View>
          <Text variant="headlineSmall" style={styles.welcome}>¡Hola, {userName}!</Text>
          <Text style={styles.subtitle}>6to de Secundaria - Gestión 2026</Text>
        </View>
        <IconButton 
          icon="logout" 
          mode="contained-tonal" 
          containerColor="#f0ebff"
          iconColor="#6200ee"
          onPress={() => navigation.replace('LoginScreen')} 
        />
      </View>

      {/* LISTADO DE MATERIAS EN GRID (CUADROS) */}
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={{ marginTop: 15, color: '#6200ee' }}>Cargando tus materias...</Text>
        </View>
      ) : (
        <FlatList
          data={subjects}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Diseño de dos columnas
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <SubjectCard 
              nombre={item.nombre} 
              imagen_url={item.imagen_url} 
              grado="6TO DE SECUNDARIA"
              onPress={() => {
                // NAVEGACIÓN A LA PESTAÑA DE TAREAS
                navigation.navigate('TasksScreen', { 
                  materiaId: item.id, 
                  materiaNombre: item.nombre 
                });
              }} 
            />
          )}
          ListEmptyComponent={
            <View style={styles.loader}>
              <Text style={styles.empty}>
                No tienes materias asignadas en este momento.
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default StudentHomeScreen;