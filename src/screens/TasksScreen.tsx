import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { supabase } from '../api/supabaseClient';

import TaskCard from '../components/MainScreen/TaskCard';

// Importación unificada de estilos
import { tasksStyles as styles } from '../styles/taskCard.styles'; 

const TasksScreen = ({ route, navigation }: any) => {
  const { materiaId, materiaNombre } = route.params || { materiaId: 1, materiaNombre: 'Materia' };
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, [materiaId]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tareas')
        .select(`*, entregas (id, archivo_url)`)
        .eq('materia_id', materiaId);

      if (error) throw error;
      setTasks(data || []);
    } catch (error: any) {
      Alert.alert("Error", "No se cargaron las tareas.");
    } finally {
      setLoading(false);
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
        <Text variant="titleLarge" style={styles.headerTitle}>
          {materiaNombre}
        </Text>
        <IconButton 
          icon="refresh" 
          onPress={fetchTasks} 
          iconColor="#6200ee" 
        />
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <TaskCard 
              titulo={item.titulo}
              entregado={item.entregas && item.entregas.length > 0}
              // NAVEGACIÓN A LA PANTALLA DE SUBIDA CORREGIDA:
              onPress={() => navigation.navigate('Upload', { 
                tareaId: item.id, 
                titulo: item.titulo,
                descripcion: item.descripcion // Asegúrate de tener esta columna en tu tabla tareas
              })}
            />
          )}
          ListEmptyComponent={
            <View style={styles.center}>
              <Text style={styles.emptyText}>No hay tareas pendientes.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default TasksScreen;