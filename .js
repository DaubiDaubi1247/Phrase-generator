request.then(str => {
    return new Promise((resolve, reject) => {
        fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7Cru&q=${str}&mt=1&onlyprivate=0&key=08c294ea9edb421be776&de=a%40b.c`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com",
                    "x-rapidapi-key": "a3f72b574dmsh9b3d950d99d909fp1b30fajsnbb27d3e3a40f"
                }
            })
            .then(data => {
                resolve(data.json())
                console.log(data);
            })

    })
})