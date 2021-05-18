window.onload = function(){

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ad90b1c895msha4f92d7545daf6ep16f444jsn7aba846aa478",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then ((albums)=>{
        console.log(albums);

        const row =  document.querySelector('.album-row');

        for(let i = 0; i< albums.length; i++){
            const album = albums[i];
            console.log(album);
            const col = document.createElement('div');
            col.classList.add("mb-4",  "text-center", "col-sm-6", "col-md-4", "col-lg-2");

            const albumContainer =document.createElement("div")
            albumContainer.classList.add("album-container")

            const anchor = document.createElement("a")
            anchor.href = "";

            const images = document.createElement("img");
            images.classList.add("img-fluid");
            images.src = album.cover;

           anchor.appendChild(images)
            albumContainer.appendChild(anchor)
            col.appendChild(albumContainer)
            row.appendChild(col);


        }

    })
    .catch(err => {
        console.error(err);
    });
}