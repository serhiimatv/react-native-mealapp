import { RouteProp } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
const MealDetailScreen = ({
  route,
}: {
  route?: RouteProp<{ MealDetail: { mealId: string } }>;
}) => {
  const mealId = route?.params?.mealId ?? '';

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
