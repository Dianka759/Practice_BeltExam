
//When clicking the < button, switches picture
// function previous() {
//     var pic = document.getElementById("picture");
//     pic.src = "images/aetherBig.jpg"
// }

// when clicking the > button, switches back
// function next() {
//     var pic = document.getElementById("picture");
//     pic.src = "images/lumineBig.jpg"
// }



function character(id) {
    var selection = document.getElementById(id);
    var picture = document.getElementById('picture');
    var name = document.getElementById('name');
    var description = document.getElementById('description');

    if (selection == lumine) {
        picture.src = "images/lumineBig.jpg";
        name.innerHTML = "Lumine";
        description.innerText = "Lumine is THE best starter character."

    } else if (selection == hutao) {
        picture.src = "images/hutaoBig.jpg";
        name.innerHTML = "Hutao";
        description.innerText = "Yes."

    } else if (selection == fischl) {
        picture.src = "images/fischlBig.jpg";
        name.innerHTML = "Fischl";
        description.innerText = "Yes."

    } else if (selection == yoimiya) {
        picture.src = "images/yoimiyaBig.png";
        name.innerHTML = "Yoimiya";
        description.innerText = "Yes."
    }
    else if (selection == ei) {
        picture.src = "images/eiBig.jpg";
        name.innerHTML = "Raiden Shogun (Ei)";
        description.innerText = "Yes."

    } else if (selection == klee) {
        picture.src = "images/kleeBig.jpg";
        name.innerHTML = "Klee";
        description.innerText = "Yes."

    } else if (selection == beidou) {
        picture.src = "images/beidouBig.jpg";
        name.innerHTML = "Beidou";
        description.innerText = "Yes."

    } else if (selection == ayaka) {
        picture.src = "images/ayakaBig.png";
        name.innerHTML = "Kamisato Ayaka";
        description.innerText = "Yes."

    } else if (selection == ganyu) {
        picture.src = "images/ganyuBig.png";
        name.innerHTML = "Ganyu";
        description.innerText = "Yes."

    } else if (selection == aether) {
        picture.src = "images/aetherBig.jpg";
        name.innerHTML = "Aether";
        description.innerText = "Yes."

    } else if (selection == xiao) {
        picture.src = "images/xiaoBig.jpg";
        name.innerHTML = "Xiao";
        description.innerText = "Yes."

    } else if (selection == venti) {
        picture.src = "images/ventiBig.jpg";
        name.innerHTML = "Venti";
        description.innerText = "Yes."
    }
    else if (selection == itto) {
        picture.src = "images/ittoBig.jpg";
        name.innerHTML = "Itto";
        description.innerText = "Yes."

    } else if (selection == diluc) {
        picture.src = "images/dilucBig.jpg";
        name.innerHTML = "Diluc";
        description.innerText = "Yes."

    } else if (selection == kaeya) {
        picture.src = "images/kaeyaBig.jpg";
        name.innerHTML = "Kaeya";
        description.innerText = "Yes."

    } else if (selection == kazuha) {
        picture.src = "images/kazuhaBig.png";
        name.innerHTML = "Kazuha";
        description.innerText = "Yes."

    } else if (selection == zhongli) {
        picture.src = "images/zhongliBig.png";
        name.innerHTML = "Zhongli";
        description.innerText = "Yes."
    }
    else if (selection == chongyun) {
        picture.src = "images/chongyunBig.jpg";
        name.innerHTML = "Chongyun";
        description.innerText = "Yes."
    }
}


function remove(element) {
    element.remove()
}

function login() {
    alert("welcome fellow genshin nerd :D");
    document.querySelector('button').innerText = "Logout"
}


var count = 0
function like() {
    var countElement = document.querySelector("#count");
    count++;
    countElement.innerText = count
}

