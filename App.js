import 'react-native-gesture-handler';
import React, {useState, useEffect} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import {ActivityIndicator, Pressable, StatusBar, Text, View} from "react-native";
import {Asset} from "expo-asset";
import * as FileSystem from 'expo-file-system';

import ListView from './app/screens/ListView'
import DetailView from "./app/screens/DetailView";
import SettingsView from "./app/screens/DetailView";
import {SearchTermContext} from "./app/config/Context";
import {SQLiteProvider} from "expo-sqlite/next";

const loadDatabase = async () => {
  const dbName = 'pokedexDbLocal.db';
  const dbAsset = require('./assets/pokedexDB.db');
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      {intermediates: true}
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [databaseLoaded, setDatabaseLoaded] = useState(false)

  useEffect(() => {
    loadDatabase()
      .then(() => setDatabaseLoaded(true))
      .catch(e => console.log(e))
  }, []);

  const suspenseFallback = () => {
    return (
      <View>
        <Text>FALLBACK</Text>
      </View
      >)
  }

  if (!databaseLoaded) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}/>
        <Text style={{fontSize: 32, padding: 25}}>Loading...</Text>
      </View>
    )
  } else {
    return (
      <SearchTermContext.Provider value={searchTerm}>
        <NavigationContainer>
          <StatusBar style="auto"/>
          <React.Suspense fallback={suspenseFallback}>
            <SQLiteProvider databaseName={'pokedexDbLocal.db'}>
              <Stack.Navigator>
                <Stack.Screen
                  name="ListView"
                  component={ListView}
                  options={{
                    headerTitle: 'Pokedex',
                    headerLargeTitle: true,
                    headerLargeTitleStyle: {color: "black"},
                    headerTitleStyle: {color: "black"},
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                    headerSearchBarOptions: {
                      placeHolder: "Search",
                      onChangeText: (e) => {
                        setSearchTerm(e.nativeEvent.text)
                      },
                    }
                  }}
                />
                <Stack.Screen
                  name="DetailView"
                  component={DetailView}
                  options={[({route}) => ({title: route.params.title}), {
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                  }]}
                />
                <Stack.Screen
                  name="SettingsView"
                  component={SettingsView}
                />
              </Stack.Navigator>
            </SQLiteProvider>
          </React.Suspense>
        </NavigationContainer>
      </SearchTermContext.Provider>
    );
  }
}

