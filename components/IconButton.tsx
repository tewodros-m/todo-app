import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome6,
} from '@expo/vector-icons';
import colors from '@/config/colors';

type IconButtonProps = {
  iconType:
    | 'Ionicons'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'MaterialIcons';
  iconName: string;
  size?: number;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  iconStyle?: TextStyle;
};

export default function IconButton({
  iconType,
  iconName,
  size = 20,
  color = colors.primaryMedium,
  onPress,
  style,
  iconStyle,
}: IconButtonProps) {
  const IconComponent =
    iconType === 'Ionicons'
      ? Ionicons
      : iconType === 'FontAwesome'
      ? FontAwesome
      : iconType === 'FontAwesome5'
      ? FontAwesome5
      : iconType === 'FontAwesome6'
      ? FontAwesome6
      : MaterialIcons;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <IconComponent
        name={iconName as any}
        size={size}
        color={color}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
