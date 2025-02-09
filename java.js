
const songsEminem = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"

//FUNZIONE RECUPERA DATI DAL ENDPOINT CON LA FETCH
function recuperaDati(){
    return fetch(songsEminem)
    .then(response => response.json())
    .catch(err => console.log(err))
}

//FUNZIONE CHE VISUALIZZA A SCHERMO LE CANZONI
//1. Rendere visibile il DIV contenitore di tutti i risultati (id: searchResults)
//2. Togliere la classe "d.none" al DIV padre del contenitore dove andrò ad inserire le cards di Eminem (id: eminem)
//3. Chiamare il DIV in cui vanno inserite le cards 
//5. Creare un ciclo forEach per creare una card per ciascuna canzone (creare img, title..)
//6. Appendere i vari componendi delle card
//7. Appendere ciascuna card nel contenitore 

function renderDati(songsList){
    let results = document.getElementById("searchResults")
    results.style.display = "flex"
    results.classList.add("row");
/*----------------------------------------------------------*/
    let resultsEminem = document.getElementById("eminem");
    resultsEminem.classList.remove("d-none")
/*----------------------------------------------------------*/
    let eminemCards = document.getElementById("eminemSection")
/*----------------------------------------------------------*/
    songsList.data.forEach(song =>{
      const card = document.createElement("div")
      card.classList.add("card", "nb-3", "bg-transparent", "border-2")

      const img = document.createElement("img")
      img.src = song.album.cover_medium
      img.classList.add("card-img-top")

      const cardBody = document.createElement("div")
      cardBody.classList.add("card-body", "px-0")

      const titleSong = document.createElement("h4")
      titleSong.classList.add("card-title", "fw-bold")
      titleSong.innerText = song.title

      const artistSong = document.createElement("span")
      artistSong.classList.add("card-text", "fw-light", "fs-small")
      artistSong.innerText = song.artist.name
/*----------------------------------------------------------*/
      cardBody.appendChild(titleSong)
      cardBody.appendChild(artistSong)

      card.appendChild(img)
      card.appendChild(cardBody)
/*----------------------------------------------------------*/
      eminemCards.appendChild(card)
    })
}


//CHIAMO LA FUNZIONE DELLA FETCH CHE CONTIENE ALL INTERNO LA CONCATENAZIONE CON LA FUNZIONE CHE VISUALIZZA A SCHERMO LE CANZONI
recuperaDati()
    //.then(songsList => console.log(songsList))
    .then(songsList => renderDati(songsList) )
    .catch(err => console.log(err))


