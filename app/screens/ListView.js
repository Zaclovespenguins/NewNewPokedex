import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable
} from 'react-native';
import React, {useEffect, useContext, useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import {properName} from "../config/FormatFunctions";
import {typeGradients} from "../config/colors";
import {DexData} from "../config/Data";
import {SearchTermContext} from "../config/Context";
import {ShiniesCaught, AllCaught} from "../config/Storage";

DexData.push ({
    "index": 1027,
    "ID": "1027",
    "name": "fakemon",
    "ability1": "gag reflex",
    "ability2": "none",
    "type1": "electric",
    "type2": "dragon",
    "descriptions": "{}",
    "img": require('../../assets/DexData/PokeImages/1021-raging-bolt.png')
},)

for (let i = 1000; i < DexData.length; i++) {
    console.log(DexData[i]);
}


export default function ListView({navigation: {navigate}}) {
    const SearchTerm = useContext(SearchTermContext);

    // function toggleShiny(dexNumber) {
    //     console.log(`Save ${dexNumber}`)
    //
    //     ShiniesCaught.save ({
    //         key: 'shiny',
    //         id: dexNumber,
    //         data: {
    //             dateTime: new Date()
    //         },
    //         expires: null
    // })
    // }


    function addObtained(dexNumber) {
        AllCaught.save({
            key: dexNumber,
            data: {
                dateTime: new Date()
            }
        })
    }

    async function shinyCaughtCheck(dexNumber) {
        var iconColor
        var iconName
        return await ShiniesCaught.load({key: 'shiny', id: dexNumber})
            .then((c) => {
                iconColor = 'gold'
                iconName = 'sparkles'
                return {iconColor, iconName}
            })
            .catch((e) => {
                iconColor = 'black'
                iconName = 'sparkles-outline'
                return {iconColor, iconName}
            });
    }

    function Entry({item}) {
        const [shinyStyleButtonColor, setShinyStyleButtonColor] = useState('black')
        const [shinyStyleButtonName, setShinyStyleButtonName] = useState('sparkles-outline')

        async function toggleShiny(dexNumber) {
            await ShiniesCaught.load({key: 'shiny', id: dexNumber})
                .then(ret => {
                    setShinyStyleButtonColor('black')
                    setShinyStyleButtonName('sparkles-outline')
                    console.log(`removing ${dexNumber}`);
                    ShiniesCaught.remove({
                        key: 'shiny',
                        id: dexNumber
                    })
                })
                .catch((e) => {
                    if (e.name === 'NotFoundError') {
                        setShinyStyleButtonColor('gold')
                        setShinyStyleButtonName('sparkles')
                        console.log(`adding ${dexNumber}`);
                        ShiniesCaught.save({
                            key: 'shiny',
                            id: dexNumber,
                            data: {
                                dateTime: new Date()
                            }
                        })
                    } else {
                        console.log(e.name)
                    }
                });
        }

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
                            onPress={() => toggleShiny(item.index)}
                            style={({pressed}) => [
                                {
                                    backgroundColor: '',
                                },]}>{({pressed}) => (
                            <Ionicons name={shinyStyleButtonName} size={32} backgroundColor=''
                                      color={shinyStyleButtonColor}/>
                        )}
                        </Pressable>
                        <Pressable
                            onPress={() => console.log(shinyCaughtCheck(item.index))}
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
        )

    };


    // const Entry = ({item}, shinyCaughtColor, shinyCaughtIcon) => (
    //     <View style={{flex: 1, padding: 3,}}>
    //         <TouchableOpacity
    //             onPress={() => navigate('DetailView', {indexNumber: `${item.index}`, title: properName(item.name)})
    //             }>
    //             <LinearGradient colors={typeGradients[`${item['type1']}`]}
    //                             start={[x = 1, y = 1]}
    //                             end={[x = 0, y = 0]}
    //                             style={styles.item}>
    //                 <Text style={styles.title}>{properName(item.name)}</Text>
    //                 <Image source={item.img} style={{flex: 1, resizeMode: 'contain', height: 100}}/>
    //                 <Pressable
    //                     onPress={() => toggleShiny(item.index)}
    //                     style={({pressed}) => [
    //                         {
    //                             backgroundColor: '',
    //                         },]}>{({pressed}) => (
    //                     <Ionicons name="sparkles-outline" size={32} backgroundColor=''
    //                               color="black"/>
    //                 )}
    //                 </Pressable>
    //                 <Pressable
    //                     onPress={() => console.log(shinyCaughtCheck(item.index))}
    //                     style={({pressed}) => [
    //                         {
    //                             backgroundColor: '',
    //                         },]}>{({pressed}) => (
    //                     <Ionicons name={pressed ? "checkmark-circle" : "checkmark-circle-outline"} size={32}
    //                               backgroundColor='' color={pressed ? 'green' : 'black'}/>
    //                 )}
    //
    //                 </Pressable>
    //             </LinearGradient>
    //         </TouchableOpacity>
    //     </View>
    // );

    const filteredData = () => {
        return (
            DexData.filter((item) => item.name.toUpperCase().includes(SearchTerm.toUpperCase()))
        )
    }


    return (
        <FlatList
            data={filteredData()}
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



