const  request =require('superagent');

function getData() {
    request
        .get('https://swapi.co/api/people/1/')
        .then(response=> {
            const home= request.get(response.body.homeworld)
            console.log('home.url:', home.url)
           
        })
    request
        .get('https://swapi.co/api/planets/1/')
        .then(response=>{
        const residents = response.body.residents[9];
        console.log('residents', residents)})
        
   request
            .get('https://swapi.co/api/people/62/')
            .then(response=> console.log(response.body.name))
}

getData()


async function getAsyncData(){
    try{
    const firstFetch = await request
    .get('https://swapi.co/api/people/1/')
    const firstresult =response.body.homeworld
    console.log(firstresult)
    const secondFetch = await firstFetch
    .get(firstresult)
    const secondresult =response.body.residents[9]
    console.log(secondresult)
    const thirdFetch = await secondFetch
    .get(secondresult)
    const thirdresult = response.body.name
    console.log(thirdresult)
    }
    catch(error){
        console.log(error)
    }
}

 getAsyncData()
