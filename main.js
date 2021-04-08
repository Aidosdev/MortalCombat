let person1 = {
    name: 'Sub Zero',
    hp: 66,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword', 'shuriken', 'ice'],
    atack() {
        console.log(this.name + ' fight...')
    }
}

let person2 = {
    name: 'Scorpion',
    hp: 66,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'shuriken', 'ice'],
    atack() {
        console.log(this.name + ' fight...')
    }
}


let createPlayer = (player, person, playerClass) => {
    let player1 = document.createElement('div');
    player1.setAttribute('class', playerClass);

    let progressbar = document.createElement('div');
    progressbar.setAttribute('class', 'progressbar');

    let character = document.createElement('div');
    character.setAttribute('class', 'character');

    let life = document.createElement('div');
    life.setAttribute('class', 'life');

    let name = document.createElement('div');
    name.setAttribute('class', 'name');

    let img = document.createElement('img');
    img.src = person.img;

    player1.appendChild(progressbar);
    player1.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    life.style.width = person.hp + "%";
    name.innerText = person.name;

    let arena = document.querySelector('.arenas');
    arena.appendChild(player1);
}
createPlayer('player1', person1, 'player1')
createPlayer('player2', person2, 'player2')