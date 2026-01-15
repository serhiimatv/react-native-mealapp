import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import DrawerNavigator from './navigators/DrawerNavigator';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <AppContent />
      </Provider>
    </>
  );
}

function AppContent() {
  return (
    <View style={styles.AppContainer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
