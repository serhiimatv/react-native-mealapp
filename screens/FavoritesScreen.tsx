import { useContext } from 'react';
import MealsList from '../components/MealList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, View, Text } from 'react-native';

const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));

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
