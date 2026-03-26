import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

// ESTILOS DE LA PANTALLA (CONTENEDOR, HEADER, ETC)
export const tasksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    paddingBottom: 15,
    backgroundColor: '#fff',
    elevation: 4,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#6200ee',
    flex: 1,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  }
});

// ESTILOS DEL CUADRITO (CARD)
export const taskCardStyles = StyleSheet.create({
  wrapper: {
    width: (width - 40) / 2, 
    marginVertical: 8,
  },
  card: {
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  cardDone: {
    borderBottomWidth: 0,
    elevation: 5,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#333',
  },
  statusLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 5,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '40%',
    height: 4,
    borderRadius: 2,
  }
});