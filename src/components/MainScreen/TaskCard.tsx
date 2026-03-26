import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Surface, IconButton } from 'react-native-paper';

import { taskCardStyles as styles } from '../../styles/taskCard.styles'; 

interface TaskCardProps {
  titulo: string;
  entregado: boolean;
  onPress: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ titulo, entregado, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.wrapper} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <Surface style={[styles.card, entregado && styles.cardDone]}>
        <View style={[styles.iconCircle, { backgroundColor: entregado ? '#e6f9f6' : '#f0ebff' }]}>
          <IconButton 
            icon={entregado ? "check-decagram" : "file-clock-outline"} 
            iconColor={entregado ? "#00d1b2" : "#6200ee"}
            size={28}
          />
        </View>

        <View style={styles.textContainer}>
          <Text variant="labelLarge" style={styles.title} numberOfLines={2}>
            {titulo}
          </Text>
          <Text style={[styles.statusLabel, { color: entregado ? "#00d1b2" : "#888" }]}>
            {entregado ? "ENTREGADO" : "PENDIENTE"}
          </Text>
        </View>

        <View style={[styles.bottomBar, { backgroundColor: entregado ? "#00d1b2" : "#ccc" }]} />
      </Surface>
    </TouchableOpacity>
  );
};

export default TaskCard;