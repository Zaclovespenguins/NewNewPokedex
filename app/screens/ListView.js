import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, ScrollView,} from 'react-native';
import React, {useEffect, useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {useSQLiteContext} from "expo-sqlite/next";
import {typeGradients, typeGradientsImages} from "../config/colors";
import {DexData} from "../config/Data";

export default function ListView({ navigation: { navigate } }) {
  const Entry = ({item}) => (
  <ImageBackground source={{backgroundColor: typeGradientsImages[`${item['type1']}`]}}>
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigate('DetailView', {indexNumber: `${item.index}`})
      }>
        <LinearGradient colors={typeGradients[`${item['type1']}`]} start={[x=1, y=1]} end={[x=0, y=1]}>
          <Text style={styles.title}>{item.name}</Text>
          <Image source={item.img} style={{width: 50, height: 50, flex: 1}}/>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );

  return (
    <FlatList
      data={DexData}
      renderItem={({item}) => <Entry item={item}/>}
      keyExtractor={item => item.index}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  item: {
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    flex: 1,
    fontSize: 32,
    padding: 10
  },
});






