// const person: {
//     name: string;
//     age: number;
// } = {
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role:[number, string] //tuple;
    } = {
    name: "Mika",
    age: 27, 
    hobbies: ['Spotrs', 'Cooking'],
    role: [2, 'author']
};


//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR!! !
}