import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../contexts/AuthContext';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Settings from '../pages/Settings';
import Create from '../pages/Create';
import Respond from '../pages/Respond';
import BottomTabs from './BottomTabs';
import SurveyResponse from '../components/SurveyResponse';
import Responses from '../pages/Responses';
import Graph from '../pages/Graph';
import About from '../pages/About';
import COLORS from '../styles/constants/colors';
import Error from '../pages/Error';

const Stack = createStackNavigator();

const Routing = () => {
  const { isSignedIn } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name='Tabs'
              component={BottomTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Settings'
              component={Settings}
              options={{ headerTintColor: COLORS.primary }}
            />
            <Stack.Screen
              name='Create'
              component={Create}
              options={{ headerTitle: 'Create survey' }}
            />
            <Stack.Screen
              name='Respond'
              component={Respond}
              options={{ headerTitle: 'Survey response' }}
            />
            <Stack.Screen
              name='Graph'
              component={Graph}
              options={{ headerTitle: 'Graphs' }}
            />
            <Stack.Screen
              name='About'
              component={About}
              options={{
                headerTitle: 'About',
                headerTintColor: COLORS.primary,
              }}
            />
            <Stack.Screen name='SurveyResponse' component={SurveyResponse} />
            <Stack.Screen name='Responses' component={Responses} />
            <Stack.Screen name='Error' component={Error} />
          </>
        ) : (
          <>
            <Stack.Screen
              name='Log in'
              component={Login}
              options={{ headerShadowVisible: false, headerShown: false }}
            />
            <Stack.Screen
              name='Sign up'
              component={Signup}
              options={{ headerShadowVisible: false, headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routing;
