import * as SQLite from 'expo-sqlite';
import {useEffect, useState} from "react";
import {Text, View} from "react-native";

export const pokemonSqlData = () =>{
  const db = SQLite.openDatabase('../database/pokedexDB.db');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql("select * from pokemonEntries", [],
        (txObj, resultSet) => {
        console.log('Got poggies')
        setEntries(resultSet.rows._array)
        }
      );
    });
  }, []);

  const showEntries = () => {
    return entries.map((entry) => {
      return(
        <View>
          <Text>{entry.name}</Text>
        </View>
      )
    })
  }
  return (
    showEntries()
  )
}

//

// useEffect(() => {
//   db.transaction(tx => {
//     tx.executeSql("select * from pokemonentries", null,
//       (txObj, resultSet) => setNames(resultSet.rows._array),
//       (txObj, error) => console.log(error)
//     )
//   });
// }, []);

// export const pokemon_list_data = [{id: '1', name: 'bulbasaur'},
//   {id: '2', name: 'ivysaur'},
//   {id: '3', name: 'venusaur'},
//   {id: '4', name: 'charmander'},
//   {id: '5', name: 'charmeleon'},
//   {id: '6', name: 'charizard'},
//   {id: '7', name: 'squirtle'},
//   {id: '8', name: 'wartortle'},
//   {id: '9', name: 'blastoise'},
//   {id: '10', name: 'caterpie'},
//   {id: '11', name: 'metapod'},
//   {id: '12', name: 'butterfree'},
//   {id: '13', name: 'weedle'},
//   {id: '14', name: 'kakuna'},
//   {id: '15', name: 'beedrill'},
//   {id: '16', name: 'pidgey'},
//   {id: '17', name: 'pidgeotto'},
//   {id: '18', name: 'pidgeot'},
//   {id: '19', name: 'rattata'},
//   {id: '20', name: 'raticate'},
//   {id: '21', name: 'spearow'},
//   {id: '22', name: 'fearow'},
//   {id: '23', name: 'ekans'},
//   {id: '24', name: 'arbok'},
//   {id: '25', name: 'pikachu'},
//   {id: '26', name: 'raichu'},
//   {id: '27', name: 'sandshrew'},
//   {id: '28', name: 'sandslash'},
//   {id: '29', name: 'nidoran-f'},
//   {id: '30', name: 'nidorina'},
//   {id: '31', name: 'nidoqueen'},
//   {id: '32', name: 'nidoran-m'},
//   {id: '33', name: 'nidorino'},
//   {id: '34', name: 'nidoking'},
//   {id: '35', name: 'clefairy'},
//   {id: '36', name: 'clefable'},
//   {id: '37', name: 'vulpix'},
//   {id: '38', name: 'ninetales'},
//   {id: '39', name: 'jigglypuff'},
//   {id: '40', name: 'wigglytuff'},
//   {id: '41', name: 'zubat'},
//   {id: '42', name: 'golbat'},
//   {id: '43', name: 'oddish'},
//   {id: '44', name: 'gloom'},
//   {id: '45', name: 'vileplume'},
//   {id: '46', name: 'paras'},
//   {id: '47', name: 'parasect'},
//   {id: '48', name: 'venonat'},
//   {id: '49', name: 'venomoth'},
//   {id: '50', name: 'diglett'},
//   {id: '51', name: 'dugtrio'},
//   {id: '52', name: 'meowth'},
//   {id: '53', name: 'persian'},
//   {id: '54', name: 'psyduck'},
//   {id: '55', name: 'golduck'},
//   {id: '56', name: 'mankey'},
//   {id: '57', name: 'primeape'},
//   {id: '58', name: 'growlithe'},
//   {id: '59', name: 'arcanine'},
//   {id: '60', name: 'poliwag'},
//   {id: '61', name: 'poliwhirl'},
//   {id: '62', name: 'poliwrath'},
//   {id: '63', name: 'abra'},
//   {id: '64', name: 'kadabra'},
//   {id: '65', name: 'alakazam'},
//   {id: '66', name: 'machop'},
//   {id: '67', name: 'machoke'},
//   {id: '68', name: 'machamp'},
//   {id: '69', name: 'bellsprout'},
//   {id: '70', name: 'weepinbell'},
//   {id: '71', name: 'victreebel'},
//   {id: '72', name: 'tentacool'},
//   {id: '73', name: 'tentacruel'},
//   {id: '74', name: 'geodude'},
//   {id: '75', name: 'graveler'},
//   {id: '76', name: 'golem'},
//   {id: '77', name: 'ponyta'},
//   {id: '78', name: 'rapidash'},
//   {id: '79', name: 'slowpoke'},
//   {id: '80', name: 'slowbro'},
//   {id: '81', name: 'magnemite'},
//   {id: '82', name: 'magneton'},
//   {id: '83', name: 'farfetchd'},
//   {id: '84', name: 'doduo'},
//   {id: '85', name: 'dodrio'},
//   {id: '86', name: 'seel'},
//   {id: '87', name: 'dewgong'},
//   {id: '88', name: 'grimer'},
//   {id: '89', name: 'muk'},
//   {id: '90', name: 'shellder'},
//   {id: '91', name: 'cloyster'},
//   {id: '92', name: 'gastly'},
//   {id: '93', name: 'haunter'},
//   {id: '94', name: 'gengar'},
//   {id: '95', name: 'onix'},
//   {id: '96', name: 'drowzee'},
//   {id: '97', name: 'hypno'},
//   {id: '98', name: 'krabby'},
//   {id: '99', name: 'kingler'},
//   {id: '100', name: 'voltorb'},
//   {id: '101', name: 'electrode'},
//   {id: '102', name: 'exeggcute'},
//   {id: '103', name: 'exeggutor'},
//   {id: '104', name: 'cubone'},
//   {id: '105', name: 'marowak'},
//   {id: '106', name: 'hitmonlee'},
//   {id: '107', name: 'hitmonchan'},
//   {id: '108', name: 'lickitung'},
//   {id: '109', name: 'koffing'},
//   {id: '110', name: 'weezing'},
//   {id: '111', name: 'rhyhorn'},
//   {id: '112', name: 'rhydon'},
//   {id: '113', name: 'chansey'},
//   {id: '114', name: 'tangela'},];
//
