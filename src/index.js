if ("serviceWorker" in navigator)   {
    navigator.serviceWorker.register("sw.js").then(registration =>{
       console.log("SW Registered!");
       console.log(registration); 
    }) .catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}

const apiKey = '10863c1a107b4e42b82a5d2aaa3866e1';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');

window.addEventListener('load',e => {
updateNews();
/*updateSources();*/
});

/*async function updateSources() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=${apiKey}`)
    const json =await res.json();

    sourceSelector.innerHTML = json.sources
        .map(src => `<ption value="${src.id}">${src.name}</option>`).join('\n');
}
*/
async function updateNews() {
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-12&sortBy=publishedAt&apiKey=${apiKey}`)
    const json =await res.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
}
function createArticle(article){
    return `
        <div class="article">
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}">
                <p>${article.description}</p>
            </a>
        </div>
    `;
}
