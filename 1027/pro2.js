const key = "7f1cec35eda90e95bd4840f197f3186c"
const fetchMovie = async() => {
const url = "https://api.themoviedb.org/3/trending/all/week?api_key=" + key + "&language=ko-KR"
const response = await axios.get(url);
for(let i=0; i<10; i++) {
    if (response.data.results[i].title == undefined) {
    console.log(response.data.results[i].name)
    }
    else {
    console.log(response.data.results[i].title)
    }
}
}