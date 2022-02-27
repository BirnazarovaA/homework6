const girlsNamesKyrgyzstan = ['Ayana', 'Kyzsaikal', 'Jibek'];
const boysNamesKyrgyzstan = ['Aman', 'Ilim', 'Arstan'];
const girlsNamesRussia = ['Anastasiya', 'Maria', 'Jenya'];
const boysNamesRussia = ['Vitalii', 'Aleksei', 'Igor'];
const namesEurope = ['Jack', 'Jenifer', 'Bencamin'];
const allNames = [...girlsNamesKyrgyzstan, ...boysNamesKyrgyzstan, ...girlsNamesRussia, ...boysNamesRussia, ...namesEurope];

console.log(allNames);

const info = {
    username: "Alex",
    surname: "Depp",
    age: 25,
    weight: 80,
    height: 180
}
const info1 = {
    ...info,
    salary: 2000,
    hair: "blond",
    eyes: "brown"
}

console.log(info1);
