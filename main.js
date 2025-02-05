let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
        let targetColor = "";
        let score = 0;
        let highScore = localStorage.getItem("highScore") || 0;

        document.getElementById("highScore").innerText = highScore;

        function startGameScreen() {
            document.getElementById("menu").classList.add("hidden");
            document.getElementById("game").classList.remove("hidden");
            startGame();
        }

        function backToMenu() {
            document.getElementById("menu").classList.remove("hidden");
            document.getElementById("game").classList.add("hidden");
        }

        function startGame() {
            document.getElementById("message").innerText = "";
            targetColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById("colorBox").style.backgroundColor = targetColor;
            document.getElementById("colorOptions").innerHTML = "";
            colors.sort(() => Math.random() - 0.5);
            colors.forEach(color => {
                let btn = document.createElement("button");
                btn.classList.add("color-btn");
                btn.style.backgroundColor = color;
                btn.onclick = () => checkAnswer(color);
                document.getElementById("colorOptions").appendChild(btn);
            });
        }

        function checkAnswer(selectedColor) {
            let message = document.getElementById("message");
            if (selectedColor === targetColor) {
                message.innerText = "Correct! 🎉";
                score++;
                if (score > highScore) {
                    highScore = score;
                    localStorage.setItem("highScore", highScore);
                    document.getElementById("highScore").innerText = highScore;
                }
            } else {
                message.innerText = "Wrong! Try again.";
                score = 0;
            }
            document.getElementById("score").innerText = score;
            startGame();
        }

        function showHighScore() {
            alert("High Score: " + highScore);
        }

        function resetHighScore() {
            localStorage.setItem("highScore", 0);
            highScore = 0;
            document.getElementById("highScore").innerText = highScore;
            alert("High Score Reset!");
        }

        function showGameRules() {
            alert("Game Rules: Click the correct color that matches the displayed color box.");
        }

        function toggleSound() {
            alert("Sound toggled (Implementation pending)");
        }
