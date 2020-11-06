// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Mika",
    age: 27,
    hobbies: ['Spotrs', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
