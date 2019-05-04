var kittens = [
        "Milo",
        "Otis",
        "Garfield"
      ] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return name 
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return name
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  kittens = [...name]
  return name
}