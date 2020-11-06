// const person: {
//     name: string;
//     age: number;
// } = {
    const person = {
    name: "Mika",
    age: 27, 
    hobbies: ['Spotrs', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR!! !
}