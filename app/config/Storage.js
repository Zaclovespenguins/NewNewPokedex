import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from 'react-native-storage';

export const ShiniesCaught = new Storage({
  size: 2500,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

export const AllCaught = new Storage({
    size: 2500,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

export const PokemonEntries = new Storage({
  size: 2500,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});
