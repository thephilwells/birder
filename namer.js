const adjectives = require('./adjectives').adjectives
const birds = require('./birds').birds

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let adjectiveIndex = getRandomInt(adjectives.length)
let bugIndex = getRandomInt(birds.length)

console.log(adjectives[adjectiveIndex] + ' ' + birds[bugIndex])
