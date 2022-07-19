const Pikachu = document.getElementById("Pikachu");
const Pokeball = document.getElementById("pokeball");

function jump() {
  if (Pikachu.classList != "jump") {
    Pikachu.classList.add("jump");

    setTimeout(function() {
      Pikachu.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function() {

  let PikachuTop = parseInt(window.getComputedStyle(Pikachu).getPropertyValue("top"));

  let PokeballLeft = parseInt(
    window.getComputedStyle(Pokeball).getPropertyValue("left")
  );

  if (PokeballLeft < 60 && PokeballLeft > 0 && PikachuTop >= 130) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function(event) {
  jump();
});
