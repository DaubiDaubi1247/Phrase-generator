let res = '';
document.querySelector('.btn').onclick = () => {
    let value = document.querySelector('#value').value
    let count = +document.querySelector('#count').value;
    let temp;
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

    request.then((data) => {
        for (let i = 0; i < count; i++) {
            let temp = new Promise(resolve => {
                resolve(data[i].body)
            })
            temp.then(str => {
                fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7Cru&q=${str}&mt=1&onlyprivate=0&key=08c294ea9edb421be776&de=a%40b.c`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com",
                            "x-rapidapi-key": "a3f72b574dmsh9b3d950d99d909fp1b30fajsnbb27d3e3a40f"
                        }
                    })
                    .then(data =>
                        data.json()
                    )
                    .then(data => {
                        res += data.responseData.translatedText + '<br>';
                        console.log(res);
                        document.querySelector('p.course').innerHTML = res;
                    })
            })
        }
    })





}



// "MyMemory_8e3f8b3b52ed5ae1bea8"
// key: "08c294ea9edb421be776"
// pass: "2c2219f774"

// 640601482