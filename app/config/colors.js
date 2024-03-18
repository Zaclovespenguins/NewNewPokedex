import {Appearance, StyleSheet,} from 'react-native';



export const typeGradients =
  {
    'water': ['#68ABF1', '#9EE6FE'],
    'steel': ['#79ADC2', '#B4F2FE'],
    'rock': ['#C8B78B', '#F0E6A9'],
    'psychic': ['#FE8A90', '#FCD5E3'],
    'poison': ['#C685E3', '#F6BEFD'],
    'normal': ['#D1DAE2', '#FFFFFF'],
    'ice': ['#87E3D4', '#CBFEFE'],
    'ground': ['#F3915E', '#FEC99A'],
    'grass': ['#7ED878', '#D0FEC0'],
    'ghost': ['#8293D8', '#B5C5FF'],
    'flying': ['#8FB5E6', '#C5DCFE'],
    'fire': ['#FE9D54', '#FDE0A9'],
    'fighting': ['#E46A93', '#FEB0D0'],
    'fairy': ['#ED8FE7', '#FECAFE'],
    'electric': ['#F4D23B', '#FEFF9B'],
    'dragon': ['#4B9FDD', '#90DCFE'],
    'dark': ['#A18DD5', '#CDC4F3'],
    'bug': ['#ADDF4A', '#F4FEA5'],
  }

export const typeGradientsImages =
  {
    'water': require('../../assets/DexData/BackgroundGradients/water.png'),
    'steel': require('../../assets/DexData/BackgroundGradients/steel.png'),
    'rock': require('../../assets/DexData/BackgroundGradients/rock.png'),
    'psychic': require('../../assets/DexData/BackgroundGradients/psychic.png'),
    'poison': require('../../assets/DexData/BackgroundGradients/poison.png'),
    'normal': require('../../assets/DexData/BackgroundGradients/normal.png'),
    'ice': require('../../assets/DexData/BackgroundGradients/ice.png'),
    'ground': require('../../assets/DexData/BackgroundGradients/ground.png'),
    'grass': require('../../assets/DexData/BackgroundGradients/grass.png'),
    'ghost': require('../../assets/DexData/BackgroundGradients/ghost.png'),
    'flying': require('../../assets/DexData/BackgroundGradients/flying.png'),
    'fire': require('../../assets/DexData/BackgroundGradients/fire.png'),
    'fighting': require('../../assets/DexData/BackgroundGradients/fighting.png'),
    'fairy': require('../../assets/DexData/BackgroundGradients/fairy.png'),
    'electric': require('../../assets/DexData/BackgroundGradients/electric.png'),
    'dragon': require('../../assets/DexData/BackgroundGradients/dragon.png'),
    'dark': require('../../assets/DexData/BackgroundGradients/dark.png'),
    'bug': require('../../assets/DexData/BackgroundGradients/bug.png')
  }

export const globalStyles = StyleSheet.create({
  listViewEntryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20
  },
  listViewEntryTitle: {
    flex: 1,
    fontSize: 28,
    padding: 25
  },
  listViewEntryWrapperCustom: {
    flex: 1,
    padding: 3,
  },
});
