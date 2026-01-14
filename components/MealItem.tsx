import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Meal from '../models/meal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MealDetails from './MealDetails';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<{ MealDetail: { mealId: string } }>
    >();
  const setMealItemHandler = () => {
    navigation.navigate('MealDetail', { mealId: id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc', foreground: true }}
        style={({ pressed }) => [pressed && styles.buttonPressed]}
        onPress={setMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
});
