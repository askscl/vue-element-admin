const scrambled = { 
    2: "e",
    5: 'o',
    1: 'h',
    4: 'l',
    3: 'l'
}
const result = Object.values(scrambled).reduce((agg, el) => agg + el, '');
console.log(result);