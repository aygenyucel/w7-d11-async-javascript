const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b04d01883msh7f4686b7124ea7bp1ce1c7jsn883776a49a4e",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let daftPunkRowElement = document.querySelector(".daftPunk-row");
let metallicaRowElement = document.querySelector(".metallica-row");
let pinkFloydRowElement = document.querySelector(".pinkFloyd-row");

daftPunkRowElement.innerHTML,
  metallicaRowElement.innerHTML,
  (pinkFloydRowElement.innerHTML = `<div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                         </div>`);

//fetching the data of Daft Punk

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daftpunk", options)
  .then((response) => response.json())
  .then((daftPunk) => {
    console.log(daftPunk["data"]);
    daftPunkRowElement.innerHTML = "";

    for (song of daftPunk["data"]) {
      daftPunkRowElement.innerHTML += `
    
        <div class="col-md-6 col-lg-4 my-3">
            <div class="card h-100">
                <img
                class="card-img-top"
                src=${song.album["cover_xl"]}
                alt="Card image cap"
                />
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${song.title_short}</h5>
                        <p class="card-text">
                        Album name: ${song.album["title"]} 
                        </p>
                    </div>
                    
                    <div class="d-flex justify-content-between my-4">
                        <a href="${song.preview} " class="btn btn-primary " style="background-color:black; border:none; border-radius:50px"><i class="bi bi-play-fill"></i></a>
                        <a href="${song.link} " class="btn btn-primary"  style="background-color:orange; border:none">Listen full song</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
  })

  .catch(
    () =>
      (daftPunkRowElement.innerHTML = `<div class="alert alert-danger">Something went wrong in getting songs!</div>`)
  );

//fetching the data of Metallica

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((metallica) => {
    console.log(metallica["data"]);
    metallicaRowElement.innerHTML = "";

    for (song of metallica["data"]) {
      metallicaRowElement.innerHTML += `
    
        <div class="col-md-6 col-lg-4 my-3">
            <div class="card h-100">
                <img
                class="card-img-top"
                src=${song.album["cover_xl"]}
                alt="Card image cap"
                />
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${song.title_short}</h5>
                        <p class="card-text">
                        Album name: ${song.album["title"]} 
                        </p>
                    </div>
                    
                    <div class="d-flex justify-content-between my-4">
                        <a href="${song.preview} " class="btn btn-primary " style="background-color:black; border:none; border-radius:50px"><i class="bi bi-play-fill"></i></a>
                        <a href="${song.link} " class="btn btn-primary"  style="background-color:orange; border:none">Listen full song</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
  })

  .catch(
    () =>
      (metallicaRowElement.innerHTML = `<div class="alert alert-danger">Something went wrong in getting songs!</div>`)
  );

//fetching the data of Pink Floyd

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd", options)
  .then((response) => response.json())
  .then((pinkFloyd) => {
    console.log(pinkFloyd["data"]);
    pinkFloydRowElement.innerHTML = "";

    for (song of pinkFloyd["data"]) {
      pinkFloydRowElement.innerHTML += `
    
        <div class="col-md-6 col-lg-4 my-3">
            <div class="card h-100">
                <img
                class="card-img-top"
                src=${song.album["cover_xl"]}
                alt="Card image cap"
                />
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${song.title_short}</h5>
                        <p class="card-text">
                        Album name: ${song.album["title"]} 
                        </p>
                    </div>
                    
                    <div class="d-flex justify-content-between my-4">
                        <a href="${song.preview} " class="btn btn-primary " style="background-color:black; border:none; border-radius:50px"><i class="bi bi-play-fill"></i></a>
                        <a href="${song.link} " class="btn btn-primary"  style="background-color:orange; border:none">Listen full song</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
  })

  .catch(
    () =>
      (pinkFloydRowElement.innerHTML = `<div class="alert alert-danger">Something went wrong in getting songs!</div>`)
  );

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daftpunk", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
