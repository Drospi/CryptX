import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

import ButtonComponent from '@/components/button';
import DescriptionComponent from '@/components/description';
import HeadComponent from '@/components/head';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.safeArea}>
        <HeadComponent />
        <DescriptionComponent />
        <ButtonComponent />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'flex-start',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    backgroundColor: '#000',

  },
});
