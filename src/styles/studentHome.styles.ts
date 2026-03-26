import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Estilos para la Pantalla (Header y Contenedor)
export const studentHomeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f2f6' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingTop: 50, 
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 4,
  },
  welcome: { fontWeight: 'bold', color: '#6200ee' },
  subtitle: { color: '#666', fontSize: 16, marginTop: 2 },
  list: { paddingHorizontal: 10, paddingBottom: 30 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  empty: { textAlign: 'center', marginTop: 50, color: '#999' },
});

// NUEVO: Estilos Tipo Unifranz para la Tarjeta
export const subjectCardStyles = StyleSheet.create({
  touchable: {
    width: width / 2 - 20, // Divide la pantalla en 2 con márgenes
    margin: 10, // Espacio entre tarjetas
  },
  cardContainer: {
    height: 180, // Altura de la tarjeta (más alta para la imagen)
    borderRadius: 16,
    overflow: 'hidden', // Importante para que los bordes redondeados afecten a la imagen
    elevation: 3, // Sombra en Android
    backgroundColor: '#fff', // Fondo por si la imagen no carga
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  // Degradado oscuro para que el texto se lea mejor
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // Fondo negro semi-transparente que sube
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  materiaTitle: {
    color: '#fff', // Texto blanco
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase', // Todo en mayúsculas como Unifranz
    marginBottom: 4,
  },
  gradoSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)', // Texto blanco con opacidad
    fontSize: 12,
  },
});