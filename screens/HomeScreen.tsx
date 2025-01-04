import React from 'react';
import Screen from '@/components/Screen';
import AppTextInput from '@/components/AppTextInput';
import { Alert, StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import colors from '@/config/colors';
import AppText from '@/components/AppText';

export default function HomeScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.searchContainer}>
        <AppTextInput label='Search...' style={styles.input} />
        <AppButton onPress={() => {}}>Search</AppButton>
      </View>
      <AppText>Today's tasks</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 10,
    backgroundColor: colors.white,
  },
  searchContainer: {
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
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
