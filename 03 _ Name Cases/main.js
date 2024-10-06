var personName = "shahzaib A.Qadir";
//Lower Case
console.log(personName.toLocaleLowerCase());
//Upper Case
console.log(personName.toLocaleUpperCase());
//Title Case
console.log(personName.replace(/\b\w/g, function (c) { return c.toLocaleUpperCase(); }));
