import React from 'react';
import Screen from '@/components/Screen';
import AppTextInput from '@/components/AppTextInput';
import { Alert, StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import Task from '@/components/Task';

export default function HomeScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.searchContainer}>
        <AppTextInput icon='search-outline' style={styles.input} />
        <AppButton
          title='Search'
          onPress={() => {}}
          color={colors.primaryMediumLight}
        />
      </View>
      <AppText>Today's tasks</AppText>
      <Task />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 10,
    backgroundColor: colors.white,
    marginHorizontal: 10,
  },
  searchContainer: {
    marginVertical: 15,
    marginHorizontal: 5,
    width: '100%',
    height: 40,
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
