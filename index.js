/* 

MIT License

Copyright (c) 2023 Cipriyo & Rhino Games

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/



var isvalided = false

const webhookURL = "https://discord.com/api/webhooks/1141821987887525918/G0QdNvkm-WrFwLhIbDXb-NEOyy4H2TtnYZd-V-EJCWUbeqG2UsnH-mdGz2SX2LwofiJS"

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
