const mainQuote = document.getElementById("main-quote");
const author = document.getElementById("author");
const jsonfile = "/jsondata.json";
let fetchedData = null;
let quoteJson = null;
let authorJson = null;

async function fetchData(){
    let response =  await fetch(jsonfile);   
    let data = await response.json();
    return data;
}

async function main() {
    fetchedData = await fetchData(jsonfile);
    console.log(fetchedData);
    randomQuote = fetchedData[Math.floor(Math.random()*fetchedData.length)];
    mainQuote.innerHTML = randomQuote.quote;
    author.innerHTML = randomQuote.author;    
}

function copyQuote(){
    navigator.clipboard.writeText(randomQuote.quote).then(function() {
        const notification = document.getElementById('copyNotification');
        notification.style.visibility = 'visible';
        notification.classList.remove('hidden');

        setTimeout(function() {
          notification.classList.add('hidden');
        }, 2000);
      });
}

main();