


class Character {
  constructor(name, charClass, level, health, image) {
    this.name = name;
    this.charClass = charClass;
    this.level = level;
    this.health = health;
    this.image = image;
  }

  attacked() {
    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died.`);
    }

    updateUI(this);
  }

  levelUp() {
    this.level += 1;
    updateUI(this);
  }
}

// Create character
const hero = new Character(
  "Snortleblat",
  "Fighter",
  1,
  100,
  "../images/snortleblat.webp"
);

function updateUI(char) {
  document.getElementById("charName").textContent = char.name;
  document.getElementById("charClass").textContent = char.charClass;
  document.getElementById("charLevel").textContent = char.level;
  document.getElementById("charHealth").textContent = char.health;
  document.getElementById("charImage").src = char.image;
}

document.getElementById("attackBtn").addEventListener("click", () => {
  hero.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
  hero.levelUp();
});

// Initial UI load
updateUI(hero);
