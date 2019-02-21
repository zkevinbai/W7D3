import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_utils';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const rootEL = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, rootEL);
})

