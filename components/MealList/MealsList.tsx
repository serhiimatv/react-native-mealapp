import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';

const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
  return <MealItem {...itemData.item} />;
};

const MealsList = ({ meals }: { meals: Meal[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
