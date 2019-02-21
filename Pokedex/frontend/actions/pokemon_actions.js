export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

// Normal Action Creators

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})


// Thunk Action Creators