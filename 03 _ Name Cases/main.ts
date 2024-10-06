let personName = "shahzaib A.Qadir"

//Lower Case
console.log(personName.toLocaleLowerCase());

//Upper Case
console.log(personName.toLocaleUpperCase());

//Title Case
console.log(personName.replace(/\b\w/g,c => c.toLocaleUpperCase()));
