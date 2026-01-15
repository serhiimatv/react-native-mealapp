import MealsList from '../components/MealList/MealsList';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, View, Text } from 'react-native';
import { useFavoritesSelector } from '../hooks/reduxHooks';

const FavoritesScreen = () => {
  const favoriteMealIds = useFavoritesSelector(
    state => state.favoritesMeals.ids,
  );
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You have no favorite meals yet. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
