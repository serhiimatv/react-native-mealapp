import { RouteProp } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
// import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({
  // navigation,
  route,
}: {
  // navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ MealsOverview: { categoryId: string } }>;
}) => {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
