const getMovie = async (name) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=e33d3e53&s=${name}`);
    const data = await response.json()
    let object = data.Search;
    let result = object.map((Element,i) => {
        return(
        `<div class="card">
            <img src="${Element.Poster}" alt="">
            <p>${Element.Title}</p>
            <button>Watch Now</button>
        </div>`
        )
    })
    showList.innerHTML = result;
}
const showList = document.getElementById("showList");
const Search = document.getElementById("Search");
Search.addEventListener("input",() => {
    getMovie(Search.value);
})