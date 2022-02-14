const softSkills = [
  {
    name: "Proativo",
    description:
      "Não gosto de ficar parado, é bem comum me ver tomando iniciativa",
  },
  {
    name: "Curioso",
    description: "Gosto de entender como as coisas são e como funcionam",
  },
  {
    name: "Sempre aprendendo mais",
    description: "Estudar para mim é como um hobby",
  },
  {
    name: "Comunicativo",
    description:
      "Eu diria que sou bem calmo na maior parte do tempo, mas gosto de conversar,as vezes até demais",
  },
  {
    name: "Trabalho em equipe",
    description: "É isso mesmo, dividir pra conquistar combina mais comigo",
  },
];
// LOAD SOFT SKILLS
function loadSoftSkills() {
  let div = document.getElementsByClassName("qualities-list")[0];
  let card = "";
  for (soft in softSkills) {
    card += `
    
    <li><em>${softSkills[soft].name}</em><span>${softSkills[soft].description}</span>
                <div class="terminal-icons">
                    <i class="fa solid fa-circle red-circle"></i>
                    <i class="fa solid fa-circle orange-circle"></i>
                    <i class="fa solid fa-circle blue-circle"></i>
                </div>
            </li>
    
    `;
  }
  div.innerHTML = card;
}
// LIST OF SKILLS TO BE LOADED
const skills = [
  {
    name: "HTML5",
    img: "./img/html5.svg",
    lvl: 4,
    xp: "3",
  },
  {
    name: "CSS3",
    img: "./img/css3.svg",
    lvl: 3,
    xp: "3",
  },
  {
    name: "Javascript",
    img: "./img/javascript.svg",
    lvl: 3,
    xp: "3",
  },
  {
    name: "Nodejs",
    img: "./img/nodejs.svg",
    lvl: 3,
    xp: "2",
  },
  {
    name: "Mysql",
    img: "./img/mysql.svg",
    lvl: 3,
    xp: "2",
  },
  {
    name: "MongoDB",
    img: "./img/mongodb.svg",
    lvl: 2,
    xp: "2",
  },
  {
    name: "Python",
    img: "./img/python.svg",
    lvl: 3,
    xp: "3",
  },
  {
    name: "C",
    img: "./img/c.svg",
    lvl: 3,
    xp: "3",
  },
];
const colors = setColors();
// LOAD MY SKILL CARDS
function loadHardSkills() {
  let skillcards = "";
  for (skill in skills) {
    skillcards += `
    <div class="card" id="${skills[skill].name}">
    <figure>
        <img src=${skills[skill].img} alt=${skills[skill].name}>
        <figcaption>${skills[skill].name}</figcaption>
    </figure>
    <div class="lvl-container">
        <div class="skill-lvl">
            <p>NÍVEL</p>
            
                ${getLvl(skills[skill].lvl, skill)}
        </div>
        <div class="xp-lvl">
            <p>EXPERIÊNCIA</p>
            <p>${skills[skill].xp} anos</p>
        </div>
    </div>
</div>
    
    `;
    document.getElementById("skill-cards").innerHTML = skillcards;
  }
}
// LOAD SKILLS LVLS
function getLvl(lvl, index) {
  let skillPoints = `<div class="skill-points">`;
  let lvl_cont = lvl;
  let color = colors[index];

  for (let i = 0; i < 5; i++) {
    if (lvl_cont > 0) {
      skillPoints += `<i class="fa solid fa-circle ${color}"></i>`;
      lvl_cont--;
    } else {
      skillPoints += `<i class="fa solid fa-circle dark-blue-circle"></i>`;
    }
  }
  skillPoints += "</div>";
  return skillPoints;
}
// SET CIRCLES COLORS FOR EACH ROW
function setColors() {
  let colors = [];
  for (let rows = 0; rows < skills.length / 2; rows++) {
    if (rows % 2 == 0) {
      colors.push("orange-circle");
      colors.push("red-circle");
    } else {
      colors.push("red-circle");
      colors.push("orange-circle");
    }
  }
  return colors;
}
loadSoftSkills();
loadHardSkills();
