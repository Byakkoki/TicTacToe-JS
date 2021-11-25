let prompt = require("prompt-sync")();

let grille = [
    [" ", " "," "],
    [" ", " "," "],
    [" ", " "," "]
]
let J1 = true
let J2 = false
let joueurActuelle = J1

function afficherGrille(){
    for(let i = 0; i < grille.length; i ++){
        console.log("|"+grille[i].join("|") + "|")
    }
}

afficherGrille()
let turn = 0

while(true){

    let x = NaN
    let y = NaN
    while((isNaN(x) || isNaN(y)) || (x < 0 || x > 2 ) || (y < 0 || y > 2 )){
        let reponse = prompt("Entrez une coorodonée X.Y : ")
        let tabResponse = reponse.split(".")
        if(tabResponse.length == 2){
            x = parseInt(tabResponse[0])
            y = parseInt(tabResponse[1])
        }
    }

    console.log("X : ", x)
    console.log("Y : ", y)

    if(grille[y][x] == " "){
        if(joueurActuelle == J1){
            grille[y][x] = "X"
            joueurActuelle = J2
        }
        else if(joueurActuelle == J2){
            grille[y][x] = "O"
            joueurActuelle = J1
        }
    }

    afficherGrille()
    if(
        (grille[0][0] != " " && grille[0][0] == grille[0][1] && grille[0][1] == grille[0][2])||
        (grille[1][0] != " " && grille[1][0] == grille[1][1] && grille[1][1] == grille[1][2])||
        (grille[2][0] != " " && grille[2][0] == grille[2][1] && grille[2][1] == grille[2][2])||
        (grille[0][0] != " " && grille[0][0] == grille[1][0] && grille[1][0] == grille[2][0])||
        (grille[0][1] != " " && grille[0][1] == grille[1][1] && grille[1][1] == grille[2][1])||
        (grille[0][2] != " " && grille[0][2] == grille[1][2] && grille[1][2] == grille[2][2])||
        (grille[0][0] != " " && grille[0][0] == grille[1][1] && grille[1][1] == grille[2][2])||
        (grille[0][2] != " " && grille[0][2] == grille[1][1] && grille[1][1] == grille[2][0]) 
        ){
            if(joueurActuelle == J1){
                console.log("Victoire du joueur J2 ( O )")
            }
            if(joueurActuelle == J2){
                console.log("Victoire du joueur J1 ( X )")
            }
            break
    }
    turn ++
    if(turn > 8){
        console.log("Vous êtes nazes")
        break
    }
}