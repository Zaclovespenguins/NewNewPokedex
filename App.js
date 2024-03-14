import React from "react";
import ListView from './app/screens/ListView'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import DetailView from "./app/screens/DetailView";

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
const Stack = createNativeStackNavigator();

export default function App() {
  // const [dbLoaded, setDbLoaded] = useState(false);
  //
  //   useEffect(() => {
  //     loadDatabase()
  //       .then(() => setDbLoaded(true))
  //       .catch();
  //   }, []);


  return (
    <NavigationContainer>
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
              headerSearchBarOptions: {{}}
          }}
        />
        <Stack.Screen
          name="DetailView"
          component={DetailView}
          options={({ route }) => ({ title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

