import { RouteProp } from '@react-navigation/native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealList/MealsList';

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

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find(category => category.id === categoryId)?.title ?? '';

    navigation?.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <MealsList meals={displayedMeals} />;
};

export default MealsOverviewScreen;
