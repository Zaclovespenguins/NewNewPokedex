import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground,} from 'react-native';
import {DexData} from "../config/Data";

export default function DetailView({ navigation, route }) {
  const indexNumber = route.params.indexNumber
  const entry = DexData[indexNumber-1]

  return(
    <View style={styles.container}>
      <ScrollView>
        <Image source={entry.img} style={{width: "100%", flex: 1}}/>
        <Text>{entry.name}</Text>
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
