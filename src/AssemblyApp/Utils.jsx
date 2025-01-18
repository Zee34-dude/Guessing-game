import { random } from "nanoid";
import { words } from "./word";
import { useState } from "react";


export function generateCurrentWord() {

  let randomNUmber = Math.floor(Math.random() * words.length)
  return words[randomNUmber]
}
export function getFarewellText() {
  const farewells = [
    `Come on, !`,
    `it's not hard, !`,
    `I believe in you, !`,
    `Chai, !`,
    `Nawa oh, !`,
    `you can do it, !`,
    `Almost there, !`,
    `Keep Trying, `
  ];
  let randomIndex = Math.floor(Math.random() * farewells.length)
 
  return farewells[randomIndex]
}



