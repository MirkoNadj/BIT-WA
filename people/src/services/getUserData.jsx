const url = 'https://randomuser.me/api/?results=50'

export const getUserData = () => {
    return fetch(url)
    .then(response => {
        return response.json()
    })
    .then(listUsers => {
        return listUsers.results.map(user => {
        return {
            name: user.name.first,
            email: user.email,
            dob: user.dob.date,
            picture1: user.picture.thumbnail,
            picture2: user.picture.large,
            id: user.id.value
        }
    })})
}
