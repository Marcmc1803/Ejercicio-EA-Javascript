fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
        const processedUsers = users
            .filter(({ id }) => id % 2 === 0)
            .map(({ id, name, address: { city } }) => ({ id, name, city }));

        const finalUsers = [
            { id: 0, name: "Guest User", city: "Unknown" },
            ...processedUsers
        ];

        const totalCharacters = finalUsers.reduce((acc, { name }) => acc + name.length, 0);

        console.log("--- Processed Users ---");
        console.log(finalUsers);

        console.log("--- Statistics ---");
        console.log(totalCharacters);
    });
