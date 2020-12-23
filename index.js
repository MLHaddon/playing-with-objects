var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];




// How would you print/log John's age?
console.log('age: ' + users[1].age);

// How would you print/log the name of the first object?
console.log('name: ' + users[0].name);

// How would you print/log the name and age of each user using a for loop?
for (let i = 0; i < users.length; i++) {
    console.log(`name: ${users[i]['name']} age: ${users[i]['age']}`);
};