import React from 'react';
import Screen from '@/components/Screen';
import AppTextInput from '@/components/AppTextInput';
import { Alert, StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import colors from '@/config/colors';
import AppText from '@/components/AppText';
import Task from '@/components/Task';
import TaskList from '@/components/TaskList';
import { mockTasks } from '@/data';
import defaultStyles from '@/config/styles';

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
      <TaskList tasks={mockTasks} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 5,
    backgroundColor: colors.white,
    marginHorizontal: 5,
  },
  searchContainer: {
    paddingHorizontal: 30,
    // width: '100%',
    height: 40,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    // flex: 1,
    borderColor: defaultStyles.colors.greyMedium,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
