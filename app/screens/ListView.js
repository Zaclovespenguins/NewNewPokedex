import {FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import {properName, range} from "../config/FormatFunctions";
import {typeGradients} from "../config/colors";
import {PokemonEntries} from "../config/Storage";
import {SearchTermContext} from "../config/Context";
import {DexData} from "../config/Data";


export default function ListView({navigation: {navigate}}) {
  const SearchTerm = useContext(SearchTermContext);

  function Entry({item}) {
    const [shinyStyleButtonColor, setShinyStyleButtonColor] = useState('black')
    const [shinyStyleButtonName, setShinyStyleButtonName] = useState('sparkles-outline')


    return (
      <View style={{flex: 1, padding: 3,}}>
        <TouchableOpacity
          onPress={() => navigate('DetailView', {indexNumber: `${item.index}`, title: properName(item.name)})
          }>
          <LinearGradient colors={typeGradients[`${item['type1']}`]}
                          start={[x = 1, y = 1]}
                          end={[x = 0, y = 0]}
                          style={styles.item}>
            <Text style={styles.title}>{properName(item.name)}</Text>
            <Image source={item.img} style={{flex: 1, resizeMode: 'contain', height: 100}}/>
            <Pressable
              onPress={() => console.log('toggle shiny')}
              style={({pressed}) => [
                {
                  backgroundColor: '',
                },]}>{({pressed}) => (
              <Ionicons name={(item.shinyCaught == "n") ? "sparkles-outline" : "sparkles"} size={32} backgroundColor=''
                        color={(item.shinyCaught == "n") ? "black" : "gold"}/>
            )}
            </Pressable>
            <Pressable
              onPress={() => console.log(recievedData())}
              style={({pressed}) => [
                {
                  backgroundColor: '',
                },]}>{({pressed}) => (
              <Ionicons name={(item.shinyCaught == "n") ? "checkmark-circle" : "checkmark-circle-outline"} size={32}
                        backgroundColor='' color={(item.shinyCaught == "n") ? 'green' : 'black'}/>
            )}

            </Pressable>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )

  }

  // const filteredData = async () => {
  //   const getMultipleDataVariable = await getMultipleData()
  //   return (
  //     getMultipleDataVariable.filter((item) => item.name.toUpperCase().includes(SearchTerm.toUpperCase()))
  //   )
  // }

  const getMultipleData = async () => {
    try {
      const multiData = await PokemonEntries.getBatchDataWithIds({
        key: "pokemon",
        ids: range(100, 150)
      })
      // console.log(JSON.parse(multiData[0]))
      return multiData
    } catch (err) {
      return JSON.parse(`{"error":"${err}"}`)
    }
  };
  const recievedData = async () => {
    let r = await getMultipleData()
    console.log(r[0].name)
    return r
  }

  return (
    <FlatList
      data={recievedData()}
      renderItem={({item}) => <Entry item={item}/>}
      keyExtractor={item => item.name}
      contentInsetAdjustmentBehavior="automatic"
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20
  },
  title: {
    flex: 1,
    fontSize: 28,
    padding: 25,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});


// item: {
//     padding: 15,
//         marginVertical: 4,
//         marginHorizontal: 8,
//
// },



