import { random } from "nanoid";
import { words } from "./word";
import { useState } from "react";


export function generateCurrentWord() {

  let randomNUmber = Math.floor(Math.random() * words.length)
  return words[randomNUmber]
}
export function getFarewellText(Language) {
  const farewells = [
    `Adios, ${Language}!`,
    `Toodle-oo, ${Language}!`,
    `Sayonara, ${Language}!`,
    `Cheerio, ${Language}!`,
    `Auf Wiedersehen, ${Language}!`,
    `Ciao for now, ${Language}!`,
    `Peace out, ${Language}!`,
    `Later gator, ${Language}!`,
    `Hasta la vista, ${Language}!`,
    `Bye Felicia, ${Language}!`
  ];
  let randomIndex = Math.floor(Math.random() * farewells.length)
  return farewells[randomIndex]
}



