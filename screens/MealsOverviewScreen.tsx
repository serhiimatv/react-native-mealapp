import { RouteProp } from '@react-navigation/native';
import { FlatList, View, StyleSheet, ListRenderItemInfo } from 'react-native';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({
  route,
}: {
  route?: RouteProp<{ MealsOverview: { categoryId: string } }>;
}) => {
  const categoryId = route?.params?.categoryId ?? '';

  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem {...itemData.item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
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
