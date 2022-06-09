const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name) {

    cats.unshift(name)

}

function destructivelyRemoveLastCat(name) {

    cats.pop();
 
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    
}

function appendCat(name) {

    const newcatArray = [...cats, name];
    return newcatArray;
}

function prependCat(name) {

    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat() {
    const newcatArray = cats.slice(0, -1);

    return newcatArray;
}

function removeFirstCat() {

let newCatArray = cats.slice(1)
    return newCatArray;

}