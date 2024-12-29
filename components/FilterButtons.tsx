import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <View style={styles.container}>
      <Button
        title='All'
        onPress={() => onFilterChange('All')}
        color={currentFilter === 'All' ? 'blue' : 'gray'}
      />
      <Button
        title='Completed'
        onPress={() => onFilterChange('Completed')}
        color={currentFilter === 'Completed' ? 'blue' : 'gray'}
      />
      <Button
        title='Pending'
        onPress={() => onFilterChange('Pending')}
        color={currentFilter === 'Pending' ? 'blue' : 'gray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default FilterButtons;
