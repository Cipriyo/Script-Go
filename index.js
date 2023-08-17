/* 

    INSERT MIT LICENCE HERE

*/



var isvalided = false

const webhookURL = "https://discord.com/api/webhooks/1141741572292091945/bDHdSkxi3IZXH62Ekgkyl4_earKaLsZnE9nXOeehgWGGNxh5L-l9Wm9UP0e40CQ3WqL7"

const request = new XMLHttpRequest()

const sembitButt = document.getElementById('sembit')
const ValidedCheck = document.getElementById('valided')
const firstquestion = document.getElementById('first')
const can_be_use_only_in_one_game = document.getElementById('protect')
const game_id = document.getElementById('gameid')
const wehavetoobfuscate = document.getElementById('obfuscate')
const final_comment = document.getElementById('comment')
const discord_name = document.getElementById('dizzy_name')
const main_frame = document.getElementById('mainDiv')
const end_frame = document.getElementById('endDiv')

// Max Security Settings

const WebsiteLockdown = false

// END of Max Security Settings


if (WebsiteLockdown == true) {
    const lockdown_txt_1 = document.getElementById('azerty')
    const lockdown_txt_2 = document.getElementById('qwerty')

    main_frame.style.display = "none"
    end_frame.style.display = "block"
    
    lockdown_txt_1.textContent = "The site has been locked!"
    lockdown_txt_2.textContent = "Please come back later and follow the status of this service on the Discord!"
}

ValidedCheck.addEventListener('change', () => {
    if (isvalided == false) {
        isvalided = true
    } else if (isvalided == true) {
        isvalided = false
    }
})

function ShowEndScreen() {
    main_frame.style.display = "none"
    end_frame.style.display = "block"
}

function IsValided() {
    if (isvalided) {
        return true
    } else {
        return false
    }
}

function ReallySendWebhook() {
    request.open("POST", webhookURL)
    request.setRequestHeader('Content-type', 'application/json');
    const Content = {
        "content": "New script request :",
        "tts": false,
        "embeds": [
          {
            "id": 673794947,
            "description": "",
            "fields": [],
            "title": "[Start] This marks the beginning of the script request:",
            "color": 16777215
          },
          {
            "id": 561259957,
            "description": "Answer : " + firstquestion.value,
            "fields": [],
            "title": "What should the script do (a script that...) ? :",
            "color": 16777215
          },
          {
            "id": 454665155,
            "description": "Answer (Yes / No) : " + wehavetoobfuscate.value,
            "fields": [],
            "title": "Should we obfuscate the script? (If so please ask @cipriyo):",
            "color": 16777215
          },
          {
            "id": 679806692,
            "description": "Answer (Yes / No) : " + can_be_use_only_in_one_game.value,
            "fields": [],
            "color": 16777215,
            "title": "Should the script run only on certain game(s) ? :"
          },
          {
            "id": 606106992,
            "description": "Answer : " + game_id.value,
            "fields": [],
            "title": "If and only if the answer to the previous question is yes, what are/are the id(s) of the game(s) that can run the script ? :",
            "color": 16777215,
            "footer": {
              "text": "!!! INFO : A '+' means the separation between two ids !!!"
            }
          },
          {
            "id": 534427084,
            "description": "Comment : " + final_comment.value,
            "fields": [],
            "title": "Comment of the request given by the person who sent the request :",
            "color": 16777215
          },
          {
            "id": 23900988,
            "description": "Username : " + discord_name.value,
            "fields": [],
            "title": "Discord username of the person who submitted the request :",
            "color": 16777215
          },
          {
            "id": 900168015,
            "title": "[END] This marks the end of the script request",
            "description": "Please say in the chat who wants to take care of this request (unless the person who sent this request has specified who should take care of this request)\n\n------------------------------------------\n\nThis service is subject to a license : https://raw.githubusercontent.com/Cipriyo/Script-Go/main/LICENSE",
            "color": 16777215,
            "footer": {
              "text": "END"
            },
            "fields": []
          }
        ],
        "components": [],
        "actions": {},
        "username": "Script & Go | Rhino Games | By: cipriyo",
        "avatar_url": "https://raw.githubusercontent.com/Cipriyo/Script-Go/main/media/logo/RhinoPFP.png"
    }
    request.send(JSON.stringify(Content))

    // Remplacer ceci par la méthode du webhook
    alert('Les chose suivante serons une prévisualisation avant que les webhook marche.')
    alert('Demande : ' + firstquestion.value + ', obfuscate (demander a Cipriyo pour ceci) ? : ' + wehavetoobfuscate.value + ', faut-il faire en sorte que le script marche seulement sur certain je ? : ' + can_be_use_only_in_one_game.value + ", si la question d'avant est sur yes quel identifiant de jeu sont autoriser a executer ce script ? (un point signifie la séparation entre deux identifiants de jeux) : " + game_id.value + ', un commentaire a ajouter ? : ' + final_comment.value + ', nom dutilisateur Discord de la personne qui a envoyer la demande : ' + discord_name.value)
    ShowEndScreen()
}

if (document == null) or (document == isvalided); {
    console.dir(document)
} {
    console.log('Ayo pizza here')
}

function phase2() {
    var STOP = false

    if (firstquestion.value == "") {
        alert('Merci de nous dire dans la première question quoi coder!')
        STOP = true
    }
    if (STOP == false) { // la suite
        if (can_be_use_only_in_one_game.value == "yes") {
            if (game_id.value == null) {
                STOP = true
                alert('Merci de rentrez un identifiant de jeu(x) valide!')
            }
        }
        if (discord_name.value == "") {
            alert("Merci d'entrez votre nom d'utilisateur Discord pour un suivi de votre demande !")
            STOP = true
        }
        if (STOP == false) {
            ReallySendWebhook()
        }
    }
    // Fin de cette fonction
    STOP = false
}


sembitButt.addEventListener('click', () => {
    if (IsValided()) {
        phase2()
    } else {
        alert('Merci de valider vos choix avec la coche !')
    }
})


/* Fin du script */
console.log('DEBUG : LE JS A ÉTÉ CHARGER DANS ÉRREUR !')
