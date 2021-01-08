var hp1 = document.getElementById('HP1');
var atk1 = document.getElementById('ATK1');
var p1 = document.getElementById('P1');
var hp2 = document.getElementById('HP2');
var atk2 = document.getElementById('ATK2');
var p2 = document.getElementById('P2');
var inForm = document.getElementById('inputs');
var form = document.getElementById('form');
var atkDiv = document.getElementById('attack');
var img1 = document.getElementById('pic1');
var img2 = document.getElementById('pic2');


var players = ['DOG', 'CAT'];

var myPix1 = new Array("images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg");
var myPix2 = new Array("images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg");
var randomNum1 = Math.floor(Math.random() * myPix1.length);
var randomNum2 = Math.floor(Math.random() * myPix2.length);

var health1 = 100
var health2 = 100
var inATK, inATK2;

form.addEventListener('submit', function inputs(e) {
    e.preventDefault();
    inATK = e.target.inATK.value;
    var inChar = e.target.inChar.value;

    if (inChar === 'DOG') {
        inChar = players[0];
        var inChar2 = players[1];

        hp1.innerHTML = `HP: ${health1}%`;
        atk1.innerHTML = `ATK: ${inATK}`;
        p1.innerHTML = inChar;

        hp2.innerHTML = `HP: ${health2}%`;
        inATK2 = getRndInteger(5, 20);
        atk2.innerHTML = `ATK: ${inATK2}`;
        p2.innerHTML = inChar2;
        img1.setAttribute('src', myPix1[randomNum1]);
        img2.setAttribute('src', myPix2[randomNum2]);

        inForm.remove()

        setTimeout(
            function fightBtn() {
                var atkBtn = document.createElement('button');
                atkDiv.appendChild(atkBtn);
                atkBtn.setAttribute('id', 'atk')
                atkBtn.onclick = function () {
                    if (health2 > 0) {
                        health2 = health2 - inATK;
                        setTimeout(
                            function myHP() {
                                health1 = health1 - inATK2;
                                hp1.innerHTML = `HP: ${health1}%`;
                                if (health1 <= 0) {
                                    alert(`${inChar2} Wins!`)
                                }

                            }, 500);
                        hp2.innerHTML = `HP: ${health2}%`;
                    } else if (health2 <= 0) {
                        alert(`${inChar} Wins!`)
                    }

                }
                atkBtn.innerHTML = 'Attack';

            }, 1500);


    } else if (inChar === 'CAT') {
        inChar = players[1];
        inChar2 = players[0];

        hp1.innerHTML = `HP: ${health1}%`;
        atk1.innerHTML = `ATK: ${inATK}`;
        p1.innerHTML = inChar;

        hp2.innerHTML = `HP: ${health2}%`;
        inATK2 = getRndInteger(5, 20);
        atk2.innerHTML = `ATK: ${inATK2}`;
        p2.innerHTML = inChar2;
        img1.setAttribute('src', myPix2[randomNum1]);
        img2.setAttribute('src', myPix1[randomNum2]);


        inForm.remove()
        setTimeout(
            function fightBtn() {
                var atkBtn = document.createElement('button');
                atkDiv.appendChild(atkBtn);
                atkBtn.setAttribute('id', 'atk')
                atkBtn.onclick = function () {
                    if (health2 > 0) {
                        health2 = health2 - inATK;
                        setTimeout(
                            function myHP() {
                                health1 = health1 - inATK2;
                                hp1.innerHTML = `HP: ${health1}%`;
                                if (health1 <= 0) {
                                    alert(`${inChar2} Wins!`)
                                }

                            }, 500);
                        hp2.innerHTML = `HP: ${health2}%`;
                    } else if (health2 <= 0) {
                        alert(`${inChar} Wins!`)
                    }

                }
                atkBtn.innerHTML = 'Attack';

            }, 1500);
    }
    else if (inChar != 'CAT' || inChar != 'DOG') {
        alert('Only Cats and Dogs are allowed in this game!')
    }
});



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
