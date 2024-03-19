import {BackHandler, Button, Pressable, Text, View} from "react-native";
import * as FileSystem from "expo-file-system"
import {Asset} from "expo-asset";
import RNExitApp from "react-native-exit-app";

export default function SettingsView() {
  const loadDatabase = async () => {
    const dbName = 'pokedexDbLocal.db';
    const dbAsset = require('../../assets/pokedexDB.db');
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
  const rebuildInternalDb = async () => {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/pokedexDbLocal.db`).then(() => {
      console.log('Database Deleted')
      loadDatabase().then(() => console.log("Database Rebuilt")).finally(() => RNExitApp.exitApp())
    })
  }

  return (
    <View style={{alignContent: 'center', alignItems: 'center', flex: 1}}>
      <Button title={"Rebuild Database"} style={{titleFontSize: 54, color: '#cb5f48'}}
              onPress={() => rebuildInternalDb()}/>
    </View>
  )
}
