/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let characters = [
    "A wookie",
    "Luke Skywalker",
    "Some droid",
    "Dart Sidious",
    "R2-D2",
    "C3P0",
    "A Mandalorian",
    "Some scavenger",
    "Some rebel scum",
    "Jyn Erso",
    "Pepeto"
  ];

  let did = [
    "ate",
    "peed",
    "crashed",
    "broke",
    "repaired",
    "bought",
    "selled",
    "lost",
    "traded",
    "stole",
    "sold",
    "asked about"
  ];

  let something = [
    "my X-Wing",
    "a Sith Wayfinder",
    "the lightsaber",
    "a Star Destroyer",
    "some credits",
    "an AT-AT",
    "the Death Star blueprints",
    "a Sith robe",
    "a Stormtrooper's blaster",
    "what to do"
  ];

  let atSomePlace = [
    "in Coruscant",
    "at Tatooine",
    "in Jabba's house",
    "in the droid's pit",
    "in Leia's cell",
    "in the Cantina",
    "in the Sarlacc's Pit",
    "in Mexico",
    "in Guasdualito"
  ];

  let who = characters[Math.floor(Math.random() * characters.length)];

  let action = did[Math.floor(Math.random() * did.length)];

  let what = something[Math.floor(Math.random() * something.length)];

  let where = atSomePlace[Math.floor(Math.random() * atSomePlace.length)];

  document.querySelector(
    "#anExcuseFromFarAway"
  ).innerHTML = `<h2 class="display-1 text-info">${who} ${action} ${what} ${where}!</h2>`;
};
