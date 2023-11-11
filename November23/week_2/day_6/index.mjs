#!/usr/bin/env node
import axios from "axios";
import yargs from "yargs";
import inquirer from "inquirer";
const { argv } = yargs(process.argv);
// console.log("sujit is a King")
const printFiveMoves = async (pokemonName) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      const pokemon = response.data;
      const moves = pokemon.moves.map(({move}) => move.name);
      console.log(moves.slice(0, 5));
    })
    .catch((error) => {
      console.log(error);
    });
};
const promt = inquirer.createPromptModule()
promt([{
    type:"input",
    name:"pokemon",
    message:"Enter a pokemon name to see its first 5 moves"
}]).then((answers) =>{
    const pokemon =answers.pokemon
    printFiveMoves(pokemon);
})
