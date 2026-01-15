import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect, useMemo } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IconButton from '../components/IconButton';
import {
  useFavoritesDispatch,
  useFavoritesSelector,
} from '../hooks/reduxHooks';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({
  route,
  navigation,
}: {
  route?: RouteProp<{ MealDetail: { mealId: string } }>;
  navigation?: NativeStackNavigationProp<{ MealDetail: { mealId: string } }>;
}) => {
  const favoriteMealIds = useFavoritesSelector(
    state => state.favoritesMeals.ids,
  );
  const dispatch = useFavoritesDispatch();

  const mealId = route?.params?.mealId ?? '';
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorites = useMemo(
    () => favoriteMealIds.includes(mealId),
    [favoriteMealIds, mealId],
  );

  useLayoutEffect(() => {
    const changeFavoriteStatusHandler = () => {
      if (mealIsFavorites) {
        dispatch(removeFavorite({ mealId }));
      } else {
        dispatch(addFavorite({ mealId }));
      }
    };

    navigation?.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorites ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, mealId, selectedMeal, mealIsFavorites, dispatch]);
  return (
    <ScrollView style={styles.rootScreen}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients ?? []} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps ?? []} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootScreen: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
