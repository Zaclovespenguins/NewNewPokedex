import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
    Asy
} from 'react-native';
import React, {useEffect, useContext} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import {properName} from "../config/FormatFunctions";
import {typeGradients} from "../config/colors";
import {DexData} from "../config/Data";
import {SearchTermContext} from "../config/Context";
import {ShiniesCaught, AllCaught} from "../config/Storage";

export default function ListView({navigation: {navigate}}) {
    const SearchTerm = useContext(SearchTermContext);

    async function toggleShiny(dexNumber) {
        try {
            let value = await ShiniesCaught.getItem('shiny');
            if (value != null){
                ShiniesCaught.remove({
                    key: 'shiny',
                    id: dexNumber
                });
            } else {
                ShiniesCaught.save({
                    key:'shiny',
                    id: dexNumber,
                    data:{
                        dateTime: new Date()
                    }
                })}
        } catch {
            (e) => console.log(e)
        }

    }

    function addObtained(dexNumber) {
        AllCaught.save({
            key:dexNumber,
            data:{
                dateTime: new Date()
            }
        })
    }

    const Entry = ({item}) => (
        <View style={{flex: 1, padding: 3,}}>
            <TouchableOpacity
                onPress={() => navigate('DetailView', {indexNumber: `${item.index}`, title: properName(item.name)})
                }>
                <LinearGradient colors={typeGradients[`${item['type1']}`]}
                                start={[x = 1, y = 1]}
                                end={[x = 0, y = 1]}
                                style={styles.item}>
                    <Text style={styles.title}>{properName(item.name)}</Text>
                    <Image source={item.img} style={{flex: 1, resizeMode: 'contain', height: 100}}/>
                    <Pressable
                        onPress={() => addShiny(item.index)}
                        style={({pressed}) => [
                            {
                                backgroundColor: '',
                            },]}>{({pressed}) => (
                        <Ionicons name={pressed ? "sparkles" : "sparkles-outline"} size={32} backgroundColor=''
                                  color={pressed ? 'gold' : 'black'}/>
                    )}

                    </Pressable>
                    <Pressable
                        onPress={() => console.log('pressed')}
                        style={({pressed}) => [
                            {
                                backgroundColor: '',
                            },]}>{({pressed}) => (
                        <Ionicons name={pressed ? "checkmark-circle" : "checkmark-circle-outline"} size={32}
                                  backgroundColor='' color={pressed ? 'green' : 'black'}/>
                    )}

                    </Pressable>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

    const filteredData = () => {
        return (
            DexData.filter((item) => item.name.toUpperCase().includes(SearchTerm.toUpperCase()))
        )
    }


    return (
        <FlatList
            data={filteredData()}
            renderItem={({item}) => <Entry item={item}/>}
            keyExtractor={item => item.index}
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



