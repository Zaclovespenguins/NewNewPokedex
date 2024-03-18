import {Image, ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useEffect, useState} from 'react'
import {useSQLiteContext} from "expo-sqlite/next";

import {typeGradients} from "../config/colors";
import detailTabView from "./DetailScreen_Tabs";
import {TabView} from "react-native-tab-view";
import {properName} from "../config/FormatFunctions";

export default function DetailView({navigation, route}) {
  const [result, setResult] = useState([])
  const [resLoaded, setResLoaded] = useState(false)
  const db = useSQLiteContext()

  async function getData() {
    const res = await db.getAllAsync(`SELECT * FROM pokemonEntries where id = ${route.params.indexNumber};`, [])
    setResult(res[0])
    setResLoaded(true)
  }

  useEffect(() => {
    db.withTransactionAsync(async () => await getData())
  }, [db]);


  const dexPage = (result) => {
    const gradientColor = () => {
      let arr = typeGradients[`${result['type1']}`];
      if (result.type2 !== 'none') {
        arr = typeGradients[`${result['type1']}`].concat(typeGradients[`${result['type2']}`][1])
      }
      return arr
    }

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic"
                  contentContainerStyle={[styles.container, {backgroundColor: 'red'}]}>
        <LinearGradient colors={gradientColor()}
                        start={[x = 0, y = 1]}
                        end={[x = 1, y = 0]}
                        style={{width: '100%'}}>
          <View style={{alignItems: 'center', alignContent: 'center'}}>
            <Image source={{
              uri: `https://img.pokemondb.net/sprites/home/normal/${result.name}.png`,
              width: 250,
              height: 250
            }}/>
            <Text style={{fontWeight: 'bold', fontSize: 45}}>{properName(result.name)}</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    )
  }

  if (!resLoaded) {
    return (
      <View style={styles.container}>
        <Text>TEST</Text>
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
