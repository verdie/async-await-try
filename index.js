const  request =require('superagent');

// function getData() {
//     request
//         .get('https://swapi.co/api/people/1/')
//         .then(response=> {
//             const home= request.get(response.body.homeworld)
//             console.log('home.url:', home.url)
           
//         })
//     request
//         .get('https://swapi.co/api/planets/1/')
//         .then(response=>{
//         const residents = response.body.residents[9];
//         console.log('residents', residents)})
        
//     request
//             .get('https://swapi.co/api/people/62/')
//             .then(response=> console.log(response.body.name))
    
// }

// getData()


async function getAsyncData() {
    try {
        const firstFetch = await request
            .get('https://swapi.co/api/people/1/')
        const firstResult = firstFetch.body.homeworld
        console.log('firstresult:',firstResult)

        const secondFetch = await request
            .get(firstResult)
        const secondResult = secondFetch.body.residents[9]
        console.log('secondresult:',secondResult)

        const thirdFetch = await request
            .get(secondResult)
        const thirdResult = thirdFetch.body.name
        console.log('thirdresult:',thirdResult)

    } catch (error) {
        console.log(error)
    }
}

getAsyncData()