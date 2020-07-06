const API_KEY = '336145165203b522c6aeef28d90fcb05'


document.querySelector('.button').addEventListener('click', (event) => {
    event.preventDefault();
    const newsList = document.querySelector('.row');
    newsList.innerHTML = "";
    const search = document.querySelector('.input').value;
    const url = `https://gnews.io/api/v3/search?q=${search}&token=${API_KEY}`;
    (async function () {
        let response = await fetch(url)
        let data = await response.json()
        data.articles.map(val => {
            console.log(val)
            
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = '<h5></h5><p></p><a target="_blank" href="">more...</a>'
            const h5 = div.querySelector('h5');
            const p = div.querySelector('p');
            const a = div.querySelector('p');
            newsList.appendChild(div);
        
            
            h5.innerHTML = val.title;
            p.innerHTML = val.description;
            a.href = val.url;
        })
    })()
})
