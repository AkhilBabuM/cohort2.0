str="Able, was I ere I saw Elba!"
str1=str.toLowerCase().replace(/[^a-z0-9]/g, '')
str2=str1.split("").reverse().join("")

console.log(str1)
console.log(str2)

console.log(str1===str2)