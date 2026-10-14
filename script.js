const yourLegionChoice = document.getElementById("legion")
const legionJoin = document.getElementById("band")
const startBtn = document.getElementById("start-btn");
const enemy = document.getElementById("enemy");
const captainLegion = document.getElementById("captain-legion");
let hasLegion = false;

//listen to button
const attackBtn = document.getElementById("btn-1");
const defendBtn = document.getElementById("btn-2");
const retreatBtn = document.getElementById("btn-3");

const attackFomrationChoice = document.getElementById("attack-formation")
const defendFomrationChoice = document.getElementById("defend-formation")

const attack_strategy = ["Dive deep", "Head on", "Divide and conquer", "Surround", "Sneakky attack", "Bomb time"];
const defend_strategy = ["Shield", "Snowball retreat", "Divide and retreat", "Teleportation", "Fight till death"];
const map = ["The Doom castle", "The blood trench", "The poisonous sky"]

//Trying to create a function that gonna update the strategy base on the name or button click
//const update = (strategy) => {
//    for (let i = 0; i < strategy.length; i++) {
//        attackFomrationChoice.innerHTML += `<button id="attack${[i]}-is">${strategy[i]}</button>`
//    }
//}


const attackFormation = () => {
    for (let i = 0; i < attack_strategy.length; i++) {
        attackFomrationChoice.innerHTML += `<button id="attack${[i]}-is">${attack_strategy[i]}</button>`
    }
};

const defendFormation = () => {
    for (let i = 0; i < defend_strategy.length; i++) {
        defendFomrationChoice.innerHTML += `<button id="defend${[i]}-is">${defend_strategy[i]}</button>`
    }
}

attackBtn.addEventListener("click", attackFormation);
defendBtn.addEventListener("click", defendFormation);


const enemyList = ["Tyranid", "Heretic", "Orc", "Simalrion", "Eldars", "Chaos Marine", "Chaos"]

const legionSquadCaptain = ["Titus Demetrius", "Slogan Mystic", "Hercules", "Poseidon", "Anamat"]
let captain = "";

yourLegionChoice.addEventListener("change", () => {
    legionJoin.textContent = yourLegionChoice.value;
    hasLegion = true;
    if (hasLegion) {
        captain = legionSquadCaptain[Math.floor(Math.random() * legionSquadCaptain.length)]
    }
})

const chooseEnemy = () => {
    const choice = enemyList[Math.floor(Math.random() * enemyList.length)];
    enemy.textContent = choice;
    startBtn.disabled = "true"
    const HTMLString = `
        <p>Don't worry even if it hell you got assign under legion number 2 the captain are <strong>${captain}</strong></p>
    `
    captainLegion.innerHTML += HTMLString;

}

//Once after enemy is choose you can't no longer click the button again
startBtn.addEventListener("click", chooseEnemy)

