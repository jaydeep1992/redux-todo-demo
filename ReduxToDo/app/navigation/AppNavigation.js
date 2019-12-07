import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Navigations} from '../constants';

import HomeScreen from '../screens/home/HomeScreen';
import ReduxSauceToDoScreen from '../screens/reduxSauceToDo/ReduxSauceToDoScreen';
import ReduxToDoScreen from '../screens/reduxToDo/ReduxToDoScreen';

const BasicStack = createStackNavigator(
  {
    [Navigations.HomeScreen]: {screen: HomeScreen},
    [Navigations.ReduxSauceToDoScreen]: {screen: ReduxSauceToDoScreen},
    [Navigations.ReduxToDoScreen]: {screen: ReduxToDoScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Navigations.HomeScreen,
    navigationOptions: {
      backgroundColor: 'white',
    },
  },
);

export default createAppContainer(BasicStack);
