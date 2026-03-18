// src/infrastructure/ui/styles/login.styles.ts
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  PRIMARY_GOLD: '#f1c40f',
  SECONDARY_BLUE: '#2c3e50',
  WHITE: '#ffffff',
  GRAY_TEXT: '#7f8c8d',
};

export const loginStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  
  container: { 
    flex: 1, 
  },
  
  scroll: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 40, 
  },

  card: { 
    borderRadius: 24, 
    elevation: 10, 
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '100%',
    alignSelf: 'center',
  },

  content: { 
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  header: { 
    alignItems: 'center', 
    marginBottom: 20,
  },

  logoStyle: { 
    width: 110,
    height: 110,
  },

  title: { 
    fontWeight: 'bold', 
    color: COLORS.SECONDARY_BLUE, 
    marginTop: 10,
    fontSize: 22, 
    textAlign: 'center'
  },

  input: { 
    marginBottom: 12, 
    backgroundColor: COLORS.WHITE 
  },

  button: { 
    marginTop: 15, 
    borderRadius: 12, 
    backgroundColor: COLORS.SECONDARY_BLUE,
  },

  buttonContent: { 
    height: 50, 
  },
});