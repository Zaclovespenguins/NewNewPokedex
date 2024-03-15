import React, {useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"

import ListView from './app/screens/ListView'
import DetailView from "./app/screens/DetailView";
import {SearchTermContext} from "./app/config/Context";
import {Button, StatusBar, View} from "react-native";
import {DexData} from "./app/config/Data";
import {PokemonEntries} from "./app/config/Storage";


// const loadDatabase = async () => {
//   const dbName = 'pokedexDbLocal.db';
//   const dbAsset = require('/Users/zacharyreyes/reactnativeprojects/newnewpokedex/NewNewPokedex/assets/pokedexDB.db');
//   const dbUri = Asset.fromModule(dbAsset).uri;
//   const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
//
//   const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
//   if (!fileInfo.exists) {
//     await FileSystem.makeDirectoryAsync(
//       `${FileSystem.documentDirectory}SQLite`,
//       {intermediates: true}
//     );
//     await FileSystem.downloadAsync(dbUri, dbFilePath);
//   }
// };
// export default function App() {
//     const [dbLoaded, setDbLoaded] = useState(false);
//
//       useEffect(() => {
//         loadDatabase()
//           .then(() => setDbLoaded(true))
//           .catch();
//       }, []);


async function initReactStorageDatabase() {
  for (let i = 0; i < DexData.length; i++) {
    PokemonEntries.save({
      key: "pokemon",
      id: DexData[i].index,
      data: DexData[i]
    })
      .then((r) => console.log(`saved entry`))
      .catch((e) => console.log(e))
  }
}

async function printReactStorageDatabase() {
  // PokemonEntries.getAllDataForKey("pokemon").then(ids => console.log(ids))
  const testData = await PokemonEntries.load({
    key: "pokemon",
    id: 20,
    autoSync: false,
    syncInBackground: false,
  })
    .then(r => {
      return r
    })
    .catch(e => {
      return e
    })
  console.log(testData)
  return testData
}

function deleteReactStorageDatabase() {
  PokemonEntries.clearMap()
    .then(r => console.log('Cleared PokemonEntries'))
    .catch(e => console.log(e))
}


const Stack = createNativeStackNavigator();

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SearchTermContext.Provider value={searchTerm}>
      <NavigationContainer>
        <StatusBar style="auto"/>
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
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <Button onPress={() => initReactStorageDatabase()} title="ref db"/>
                  <Button onPress={() => printReactStorageDatabase()} title="print db"/>
                  <Button onPress={() => deleteReactStorageDatabase()} title="del db"/>
                </View>
              ),
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
            options={({route}) => ({title: route.params.title})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchTermContext.Provider>
  );
}

