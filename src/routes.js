import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';

const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}  options={{ headerShown: false  }}  />          
            <Stack.Screen name='page1' component={Page1}  options={{ headerShown: false  }}  />          
            <Stack.Screen name='page2' component={Page2}  options={{ headerShown: false  }}  />
            <Stack.Screen name='page3' component={Page3}  options={{ headerShown: false  }}  />     
        </Stack.Navigator>
    );
}
//     