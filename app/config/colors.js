import {StyleSheet, Text,} from 'react-native';


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

export function typeFontColored(typeInput) {
  switch (typeInput) {
    case "grass":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#71c558'}}>g
        </Text>
      </Text>)
    case "poison":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#b468b7'}}>o
        </Text>
      </Text>)
    case "bug":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#94bc4a'}}>b
        </Text>
      </Text>)
    case "fire":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#ea7a3c'}}>r
        </Text>
      </Text>)
    case "flying":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#7da6de'}}>v
        </Text>
      </Text>)
    case "dark":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#736c75'}}>d
        </Text>
      </Text>)
    case "dragon":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#6a7baf'}}>n
        </Text>
      </Text>)
    case "electric":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#e5c531'}}>l
        </Text>
      </Text>)
    case "fairy":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#e397d1'}}>y
        </Text>
      </Text>)
    case "fighting":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#cb5f48'}}>f
        </Text>
      </Text>)
    case "ghost":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#846ab6'}}>h
        </Text>
      </Text>)
    case "ground":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#cc9f4f'}}>a
        </Text>
      </Text>)
    case "ice":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#70cbd4'}}>i
        </Text>
      </Text>)
    case "normal":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#aab09f'}}>c
        </Text>
      </Text>)
    case "psychic":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#e5709b'}}>p
        </Text>
      </Text>)
    case "rock":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#b2a061'}}>k
        </Text>
      </Text>)
    case "steel":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#89a1b0'}}>m
        </Text>
      </Text>)
    case "water":
      return (<Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: 'white'}}>Z
        <Text style={{fontFamily: 'Essentiarum', fontSize: 32, padding: 10, color: '#539ae2'}}>w
        </Text>
      </Text>)
  }
}

export const gameList =
  [
    {
      title: 'Gameboy',
      data: [
        {label: 'Blue', value: 'blue'},
        {label: 'Yellow', value: 'yellow'},
        {label: 'Red', value: 'red'},
      ]
    },
    {
      title: 'Gameboy Color',
      data: [
        {label: 'Gold', value: 'gold'},
        {label: 'Silver', value: 'silver'},
        {label: 'Crystal', value: 'crystal'},
      ]
    },
    {
      title: 'Gameboy Advance',
      data: [
        {label: 'Ruby', value: 'ruby'},
        {label: 'Sapphire', value: 'sapphire'},
        {label: 'Emerald', value: 'emerald'},
        {label: 'Fire Red', value: 'firered'},
        {label: 'Leaf Green', value: 'leafgreen'},
      ]
    },
    {
      title: 'Nintendo DS',
      data: [
        {label: 'Diamond', value: 'diamond'},
        {label: 'Pearl', value: 'pearl'},
        {label: 'Platinum', value: 'platinum'},
        {label: 'Heart Gold', value: 'heartgold'},
        {label: 'Soul Silver', value: 'soulsilver'},
        {label: 'Black', value: 'black'},
        {label: 'White', value: 'white'},
        {label: 'Black 2', value: 'black-2'},
        {label: 'White 2', value: 'white-2'},
      ]
    },
    {
      title: 'Nintendo 3DS',
      data: [
        {label: 'X', value: 'x'},
        {label: 'Y', value: 'y'},
        {label: 'Omega Ruby', value: 'omega-ruby'},
        {label: 'Alpha Sapphire', value: 'alpha-sapphire'},
        {label: 'Sun', value: 'sun'},
        {label: 'Moon', value: 'moon'},
        {label: 'Ultra Sun', value: 'ultra-sun'},
        {label: 'Ultra Moon', value: 'ultra-moon'},
      ]
    },
    {
      title: 'Nintendo Switch',
      data: [
        {label: 'Lets Go Pikachu', value: 'lets-go-pikachu'},
        {label: 'Lets Go Eevee', value: 'lets-go-eevee'},
        {label: 'Sword', value: 'sword'},
        {label: 'Shield', value: 'shield'},
        {label: 'Legends: Arceus', value: 'legends-arceus'},
      ]
    }
]
