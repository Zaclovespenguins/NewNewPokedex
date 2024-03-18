import {Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list'

import {properName, range} from "../config/FormatFunctions";
import {typeGradients, globalStyles} from "../config/colors";
import {SearchTermContext} from "../config/Context";
import {useSQLiteContext} from "expo-sqlite/next";


export default function ListView({navigation}) {
  const searchTerm = useContext(SearchTermContext)
  const [result, setResult] = useState([])
  const db = useSQLiteContext()

  async function getData() {
    const res = await db.getAllAsync('SELECT name, type1, type2, shinyCaught, normalCaught, `index` FROM pokemonEntries;')
    setResult(res)
  }

  useEffect(() => {
    db.withTransactionAsync(async () => await getData())

    navigation.setOptions({
      headerLeft: () => (
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => navigation.navigate('SettingsView')}
            style={({pressed}) => [
              {
                backgroundColor: '',
              },]}>{({pressed}) => (
            <Ionicons name={"settings"} size={32} backgroundColor=''
                      color={"black"}/>
          )}
          </Pressable>
        </View>
      )
    });

  }, [db]);

  const filteredData = (SearchTerm) => {
    return (
      result.filter((item) => item.name.toUpperCase().includes(SearchTerm.toUpperCase()))
    )
  }

  async function toggleShiny(iden) {
    await db.runAsync(`update pokemonEntries set shinyCaught = case when shinyCaught = 'n' then 'y' else 'n' end where name = '${iden}';`, [])
    await getData()
  }

  async function toggleNormal(iden) {
    await db.runAsync(`update pokemonEntries set normalCaught = case when normalCaught = 'n' then 'y' else 'n' end where name = '${iden}';`, [])
    await getData()
  }

  function Entry({item}) {

    const gradientColor = () => {
      let arr = typeGradients[`${item['type1']}`];
      if (item.type2 !== 'none') {
        arr = typeGradients[`${item['type1']}`].concat(typeGradients[`${item['type2']}`][1])
      }
      return arr
    }

    return (
      <View style={globalStyles.listViewEntryWrapperCustom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailView', {indexNumber: `${item.index}`, title: properName(item.name)})
          }>
          <LinearGradient colors={gradientColor()}
                          start={[x = 0, y = 0]}
                          end={[x = 1, y = 1]}
                          style={globalStyles.listViewEntryItem}>
            <Text style={[globalStyles.listViewEntryTitle]}>{properName(item.name)}</Text>
            <Image
              source={{uri: `https://img.pokemondb.net/sprites/home/normal/${item.name}.png`, width: 100, height: 100}}
              style={{flex: 1, resizeMode: 'contain', height: 100}}/>
            <Pressable
              onPress={() => toggleShiny(item.name)}
              style={({pressed}) => [
                {
                  backgroundColor: '',
                },]}>{({pressed}) => (
              <Ionicons name={(item.shinyCaught === "n") ? "sparkles-outline" : "sparkles"} size={32} backgroundColor=''
                        color={(item.shinyCaught === "n") ? "black" : "gold"}/>
            )}
            </Pressable>
            <Pressable
              onPress={() => toggleNormal(item.name)}
              style={({pressed}) => [
                {
                  backgroundColor: '',
                },]}>{({pressed}) => (
              <Ionicons name={(item.normalCaught == "n") ? "checkmark-circle-outline" : "checkmark-circle"} size={32}
                        backgroundColor='' color={(item.normalCaught == "n") ? 'black' : 'green'}/>
            )}

            </Pressable>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )

  }

  return (
    <FlashList
      data={filteredData(searchTerm)}
      renderItem={({item}) => <Entry item={item}/>}
      keyExtractor={item => item.name}
      contentInsetAdjustmentBehavior="automatic"
      estimatedItemSize={'100'}
    />
  )
}





