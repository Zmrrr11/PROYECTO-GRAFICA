import React from 'react';
import { TouchableOpacity, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { subjectCardStyles as styles } from '../../styles/studentHome.styles';

// Definimos los props para aceptar la imagen de la BD
interface SubjectProps {
  nombre: string;
  imagen_url?: string; // <-- Nueva prop para la URL de Supabase
  onPress: () => void;
  grado?: string;
}

const SubjectCard: React.FC<SubjectProps> = ({ nombre, imagen_url, onPress, grado }) => {
  
  // Lógica de respaldo: si la BD no tiene imagen, usamos un color sólido o patrón
  const sourceImage = imagen_url 
    ? { uri: imagen_url } 
    : { uri: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400' };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.touchable}>
      <View style={styles.cardContainer}>
        <ImageBackground 
          source={sourceImage} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          {/* El overlay oscuro para que el texto resalte (Estilo Unifranz) */}
          <View style={styles.textOverlay}>
            <Text variant="titleSmall" style={styles.materiaTitle} numberOfLines={2}>
              {nombre}
            </Text>
            
            {grado && (
              <Text style={styles.gradoSubtitle} numberOfLines={1}>
                {grado}
              </Text>
            )}
            
            {/* BARRA DE PROGRESO */}
            <View style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 8, borderRadius: 2 }}>
              <View style={{ width: '10%', height: '100%', backgroundColor: '#00d1b2', borderRadius: 2 }} />
            </View>
            <Text style={{ fontSize: 10, color: '#ccc', marginTop: 4 }}>10% completado</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default SubjectCard;