import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux';
import Content from './src/components/Content';
import Product from './src/components/Product';
import store from './src/redux/store';

function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Content"
            component={Content}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Product"
            component={Product}  
          />
          </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    // <View style={{flex:1}}>
    //   </>
    // </View>
  )
}

export default App;