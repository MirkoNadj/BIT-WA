const urlID = 'https://hacker-news.firebaseio.com/v0/topstories.json' 

const urlNews = 'https://hacker-news.firebaseio.com/v0/item/'



//console.log(arrayID)

const getIDArray = (url) => {
    return fetch(url)
    .then(response => {
        return response.json()        
    })
    .then(topTenID => {
        let arrayID = []
        //console.log(topTenID)
        return topTenID.slice(0,10).forEach(ids => {
            arrayID.push(ids)
        return {
            arrayID       
        }
    })})    
}
getIDArray(urlID)
console.log(getIDArray())

const getNewsByID = (id) => {
    return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty')
    .then(response => {
        return response.json()
    }) 
}

