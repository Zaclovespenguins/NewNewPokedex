import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useEffect, useState} from 'react'
import {useSQLiteContext} from "expo-sqlite/next";
import Dropdown from 'react-native-input-select';

import {typeGradients} from "../config/colors";
import {properName} from "../config/FormatFunctions";
import {typeFontColored, gameList} from "../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetailView({navigation, route}) {
  const [result, setResult] = useState([])
  const [resLoaded, setResLoaded] = useState(false)
  const [selectedGame, setSelectedGame] = useState('');
  const db = useSQLiteContext()

  const testText = {'red': "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.", 'blue': "Obviously prefers\nhot places. When\nit rains, steam\x0cis said to spout\nfrom the tip of\nits tail.", 'yellow': "The flame at the\ntip of its tail\nmakes a sound as\x0cit burns. You can\nonly hear it in\nquiet places.", 'gold': "The flame on its\ntail shows the\nstrength of its\x0clife force. If it\nis weak, the flame\nalso burns weakly.", 'silver': "The flame on its\ntail indicates\nCHARMANDER's life\x0cforce. If it is\nhealthy, the flame\nburns brightly."}

  async function getData() {
    const res = await db.getAllAsync(`SELECT * FROM pokemonEntries where id = ${route.params.indexNumber};`, [])
    setResult(res[0])
    setResLoaded(true)
  }

  useEffect(() => {
    db.withTransactionAsync(async () => await getData())

    navigation.setOptions({
      headerShown: false
    });
  }, [db]);


  const dexPage = (result) => {

    const gradientColor = () => {
      let arr = typeGradients[`${result['type1']}`];
      if (result.type2 !== 'none') {
        arr = typeGradients[`${result['type1']}`].concat(typeGradients[`${result['type2']}`][1])
      }
      return arr
    }
    const urlName = () => {
      if (result.name == 'nidoran♂') {
        return 'nidoran-m'
      } else if (result.name == 'nidoran♀') {
        return 'nidoran-f'
      } else {
        return result.name
      }
    }

    return (

      <LinearGradient colors={gradientColor()}
                      start={[x = 0, y = 1]}
                      end={[x = 1, y = 0]}
                      style={{flex: 1}}>
        <Pressable
          onPress={() => navigation.pop()}
          style={{top: 60, left: 30, zIndex: 1}}>
          <Ionicons
            name={"arrow-back"}
            size={32}
            backgroundColor=''
            color={'black'}/>
        </Pressable>
      <ScrollView contentInsetAdjustmentBehavior="automatic"
                  contentContainerStyle={[styles.container]}>
        {/*<LinearGradient colors={gradientColor()}*/}
        {/*                start={[x = 0, y = 1]}*/}
        {/*                end={[x = 1, y = 0]}*/}
        {/*                style={{width: '100%'}}>*/}
          <View style={{alignItems: 'center', alignContent: 'center'}}>
            <Image source={{
              uri: `https://img.pokemondb.net/sprites/home/normal/${urlName()}.png`,
              width: 250,
              height: 250
            }}/>
            <Text style={{fontWeight: 'bold', fontSize: 45}}>{properName(result.name)}</Text>
            <View style={{flexDirection: 'row'}}>
              {typeFontColored(result['type1'])}
              {typeFontColored(result['type2'])}
            </View>
          </View>
      {/*</LinearGradient>*/}
        <Dropdown
          options={gameList}
          placeholder={"Pick a game"}
          onValueChange={(val) => setSelectedGame(val)}
          selectedValue = {selectedGame}
          isSearchable
          dropdownStyle={{
            borderWidth: 0, // To remove border, set borderWidth to 0
            width: 300,
            alignSelf: 'center'
          }}
          listComponentStyles={{
            sectionHeaderStyle: {
              paddingVertical: 6,
              paddingHorizontal: 12,
              backgroundColor: typeGradients[`${result['type1']}`][0],
              color: 'white',
              borderRadius: 0,
              overflow: 'hidden',
            },
          }}/>
        <Text>{result.descriptions[selectedGame]}</Text>
        <Text>{JSON.parse(result.descriptions)[selectedGame]}</Text>
      </ScrollView>
      </LinearGradient>
    )
  }

  if (!resLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading dex entry...</Text>
      </View>
    )
  } else {
    return (
      dexPage(result)
    )
  }
}

// <LinearGradient colors={typeGradients[`${result['type1']}`]}
//                 start={[x = 0, y = 1]}
//                 end={[x = 1, y = 0]}
//                 style={styles.container}></LinearGradient>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 32,
    flex: 1
  },
  image: {
    width: 430,
    flex: 1,
    resizeMode: 'contain'
  }
});
