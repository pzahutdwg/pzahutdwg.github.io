/*
                          :::         :::      :::         :::      :::         :::
                         :+:        :+::+      :+:       :+:      :+::+        :+:
                        +:+       +:+ +:+      +:+     +:+      +:+ +:+       +:+
                       +++      +++   +++      +++   +++      +++   +++      +++
                      +#+     +#++#++#++#      +#+ +#+      +#++#++#++#     
            #+#     #+##    #+#       #+#      #+##+      #+#       #+#    #+#
            ##########    ###         ###      ###      ###         ###   ###
    */

let bossHpBox = document.getElementById("bossHP");
let bossHpCurrent = 20;
let bossHpMax = 20;

function makeHP() {
    console.clear();
    let counter = 0;


    bossHpBox.innerHTML = "";

    while (counter < bossHpMax) {
        counter += 1;
        let newHeart = document.createElement("img");
        if (counter <= bossHpCurrent) {
            if (bossHpCurrent % 2 == 1 && counter == bossHpCurrent) {
                newHeart.src = "img/halfHeart.png";

            } else {
                newHeart.src = "img/fullHeart.png";

                counter += 1;
            }
        } else {
            if (counter + 1 <= bossHpMax)
                newHeart.src = "img/emptyHeart.png";
            counter += 1;
        }
        newHeart.width = 20;
        bossHpBox.appendChild(newHeart);

        console.log("counter " + counter)

    }
}

makeHP();

function attack() {
    if (bossHpCurrent - 3 > 0) {
        bossHpCurrent -= 3;
        makeHP();
    } else {
        alert("Have mercy, you monster!");
    }
    console.log(bossHpCurrent)
}
