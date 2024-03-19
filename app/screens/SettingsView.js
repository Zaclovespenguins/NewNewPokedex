import {Button, Text, View} from "react-native";
import * as FileSystem from "expo-file-system"
import {Asset} from "expo-asset";
import dbAsset from "../../assets/pokedexDB.db";

export default function SettingsView() {
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
  const rebuildInternalDb = async () => {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/pokedexDbLocal.db`).then(() => {
      console.log('Database Deleted')
      loadDatabase().then(() => console.log("Database Rebuilt"))
    })
  }

  return (
    <View>
      <Text>Texty Text</Text>
      <Button title={"Rebuild Database"} style={{textColor: 'red'}} onPress={() => rebuildInternalDb()}/>
    </View>
  )
}
