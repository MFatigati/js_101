/* 

p
  i
    a number, n, representing number of lights, and number of passes
  o
    array of light numbers that are on at the end
  r
    on first pass toggle 2, and all numbers divisible by 2, up n
      -toggle 
    on second pass, toggle 3, and all numbers divisible by 3, up n
    on third, toggle 4, and all numbers divisible by 4, up to n
e
d
a
create an object of numbers, from 1 to n, with values set at on
create an array of keys from that object

for as many rounds as there are switches, starting at 2
  iterate over all numbers in keys array, starting at 
    if number in array of keys is divisble by toggleCount, turn off that value in the object
    if number in array of keys is NOT divisble by toggleCount, turn ON that value in the object
  
create a new array, composed of just those keys whose values are on

*/

function lightsOn(switches) {
  let lightObject = createLightObject(switches);
  // console.log(lightObject)
  let lightsKeys = Object.keys(lightObject);
  // console.log(lightsKeys)
  let startingRound = 2;

  for (let round = startingRound; round <= switches; round += 1) {
    for (let currentLight = round; currentLight <= switches; currentLight += 1) {
      if (currentLight % round === 0) {
        lightObject[currentLight] = toggleSwitch(lightObject[currentLight]);
      }
    }
    
  }
  
  let finalOnLights = [];
  for (let lightNum in lightObject) {
    if (lightObject[lightNum] === "on") {
      finalOnLights.push(lightNum);
    }
  } 
  // console.log(lightObject)
  return finalOnLights;

}

function createLightObject(numLights) {
  let lightObject = {};
  for (let i = 1; i <= numLights; i ++) {
    lightObject[i] = "on";
  }
  return lightObject;
}

function toggleSwitch(lightNumber){
  return lightNumber === "on" ? "off" : "on";
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]