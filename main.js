const API_KEY = '336145165203b522c6aeef28d90fcb05';

async function addNews(search) {
    const url = `https://gnews.io/api/v3/search?q=${search}&token=${API_KEY}`;
    const newsList = document.querySelector('.row');
    newsList.innerHTML = "";
    let response = await fetch(url)
    let data = await response.json();
    data.articles.pop();
    data.articles.map(val => {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = '<h5></h5><img src="" alt=""><p></p><a target="_blank" href="">Read more...</a>'
        const h5 = div.querySelector('h5');
        const p = div.querySelector('p');
        const a = div.querySelector('a');
        const img = div.querySelector('img');
        newsList.appendChild(div);
        
        h5.innerHTML = val.title;
        p.innerHTML = val.description;
        a.href = val.url;
        if(val.image != null) {
            img.src = val.image;
        }
    })
};

const topicNews = function(className) {
    document.querySelector(`.${className}`).addEventListener('click', (event) => {
        event.preventDefault();
        const search = className;
        addNews(search);
    });
};

document.querySelector('.button').addEventListener('click', (event) => {
    event.preventDefault();
    const search = document.querySelector('.input').value;
    search ? addNews(search):addNews('Armenia');
    document.querySelector('.input').value = "";
});

document.addEventListener('DOMContentLoaded', () => {
    addNews('Armenia');
})

topicNews('sport');
topicNews('world');
topicNews('business');
topicNews('technology');