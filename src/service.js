const API_URL_RICK_AND_MORTY = "https://rickandmortyapi.com/api/character";
const main = document.querySelector(".main-container");

const infos = []
const imgPersons = []


async function loadInfosPersons() {
    await fetch(API_URL_RICK_AND_MORTY)
    .then((resp) => resp.json())
    .then((json) => {
      const result = json.results
      result.forEach((person) => {
        infos.push({name: person.name, status: person.status, url: person.url, img: person.image})

        main.innerHTML += `
          <div>
            <h1>${person.name}</h1>
            <img src="${person.image}" alt="${person.name}">
            <p>Status: ${person.status}</p>
          </div>
        `
      })  
      console.log(infos)
    })
}


loadInfosPersons()
