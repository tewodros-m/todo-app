import React from 'react';
import Screen from '@/components/Screen';
import AppTextInput from '@/components/AppTextInput';
import { Alert, StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import colors from '@/config/colors';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput label='Search...' style={styles.input} />
        <AppButton onPress={() => {}}>Search</AppButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 5,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.greyMedium,
    borderRadius: 5,
  },
});
