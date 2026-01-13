import { RouteProp } from '@react-navigation/native';
import { View, Text } from 'react-native';

const MealDetailScreen = ({
  route,
}: {
  route?: RouteProp<{ MealDetail: { mealId: string } }>;
}) => {
  const mealId = route?.params?.mealId ?? '';
  return (
    <View>
      <View>
        <Text>details screen {mealId}</Text>
      </View>
    </View>
  );
};

export default MealDetailScreen;
