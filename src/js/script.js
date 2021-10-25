let res = '';

function requestTranslated(str, out) {
    fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7Cru&q=${str}&mt=1&onlyprivate=0&key=08c294ea9edb421be776&de=a%40b.c`, {
            "headers": {
                "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com",
                "x-rapidapi-key": "a3f72b574dmsh9b3d950d99d909fp1b30fajsnbb27d3e3a40f"
            }
        })
        .then(data =>
            data.json()
        )
        .then(data => {
            out.textContent = data.responseData.translatedText;
        })
}

let countRequest = 0;
document.querySelector('.btn').onclick = () => {
    let value = document.querySelector('#value').value

    // let count = +document.querySelector('#count').value;
    let temp;
    let out = document.querySelector('#quote');
    let outAuthor = document.querySelector('#author');
    let request = new Promise(resolve => {
        fetch(`https://favqs.com/api/quotes?filter=${value}`, {
                headers: {
                    Authorization: 'Token token="19b22d14520bc549a428f6b5b4847e8a"'
                },
            })
            .then(data =>
                data.json())
            .then(data => {
                resolve(data.quotes);
            })
    })

    let lang = document.querySelector('#lang').value
    if (lang !== 'en') {
        request.then((data) => {
            outAuthor.textContent = data[countRequest].author;
            temp = new Promise((resolve) => {
                    resolve(data[countRequest].body)
                })
                .then(data => { requestTranslated(data, out) });
            temp = new Promise((resolve) => {
                    resolve(data[countRequest].author)
                })
                .then(data => { requestTranslated(data, outAuthor) })
        })
    } else {
        request.then(data => {
            out.textContent = data[countRequest].body;
            outAuthor.innerHTML = data[countRequest].author;
        })
    }
    request.then(() => {
        countRequest++;
    })

}



// "MyMemory_8e3f8b3b52ed5ae1bea8"
// key: "08c294ea9edb421be776"
// pass: "2c2219f774"

// 640601482