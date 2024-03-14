import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground,} from 'react-native';

import {DexData} from "../config/Data";
import {properName} from "../config/FormatFunctions";

export default function DetailView({ navigation, route }) {
  const indexNumber = route.params.indexNumber
  const entry = DexData[indexNumber-1]
  const entryName = properName(entry.name)

  return(
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image source={entry.img} style={{width: "100%", flex: 1}}/>
        <Text>{entryName}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
});
