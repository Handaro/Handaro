//Syntax Error

const users = [
    {
        username: "shinji1",
        role: "swordsman"
    },

    {
        username: "reirei02",
        role: "healer"
    },

    {
        username: "asukaEva3",
        role: "rogue"
    }

];


function displayUsernames() {

    users.forEach((user)=>{

        console.log(user.username)

    })

}

displayUsernames();


function createUser(username,role) {

    const user = {

        username,
        role

    }

    users.push(user);

}

createUser("makoto", "healer");


function displayAvailableRoles(){

    for(let i = 0; i < users.length; i++){

        // console.log(users[i]);
        console.log(users[i].role);


    }

}

displayAvailableRoles();

function returnUsernameArray(){

    let usernamesArray = [];

    for(let i = 0; i < users.length; i++){

        usernamesArray.push(users[i].username);

    }

    return usernamesArray;

}

let usernames = returnUsernameArray();

console.log(usernames);