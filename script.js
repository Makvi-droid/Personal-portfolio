function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const hobbies = ["Sleeping", "Gaming", "Sleeping"];
        let hobbyIndex = 0;
        let charIndex = 0;
        function typeEffect() {
            if (charIndex < hobbies[hobbyIndex].length) {
                document.getElementById("typewriter").innerHTML += hobbies[hobbyIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    document.getElementById("typewriter").innerHTML = "";
                    charIndex = 0;
                    hobbyIndex = (hobbyIndex + 1) % hobbies.length;
                    typeEffect();
                }, 2000);
            }
        }
        typeEffect();