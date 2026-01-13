import { RouteProp } from '@react-navigation/native';
import { FlatList, View, StyleSheet, ListRenderItemInfo } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';

const MealsOverviewScreen = ({
  route,
  navigation,
}: {
  route?: RouteProp<{ MealsOverview: { categoryId: string } }>;
  navigation?: NativeStackNavigationProp<any>;
}) => {
  const categoryId = route?.params?.categoryId ?? '';

  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem {...itemData.item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find(category => category.id === categoryId)?.title ?? '';

    navigation?.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);
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
