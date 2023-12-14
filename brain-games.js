const { result } = require("lodash");

brain-games.js
function getRandomInt(min, max) {
    let result;
     return Math.floor(Math.random() * (max - min)) + min;
} 

export default getRandomInt;