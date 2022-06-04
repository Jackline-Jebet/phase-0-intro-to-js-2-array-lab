var cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {

    cats.unshift(name)

    return cats;
}

function destructivelyRemoveLastCat(name) {

    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {

    let newcatArray = [...cats, name];
    return newcatArray;
}

function removeLastCat() {
    let newArrays=cats.slice(0,cats.length-1)

    return newArrays;
}

function removeFirstCat() {

let firstCat= cats.slice(1)
    return firstCat;

}

function prependCat(name) {

    let caats = [name, ...cats];
    return caats;

}