// Promise

const getCharacterData = () => {
    return new Promise(function(resolve, reject) {
        const error = false;

        if (!error) {
            setTimeout(() => {
                resolve({ id: 1, name: 'Rick Wick' });
            }, 1000);
        } else {
            reject('Error getting data')
        }
    })
}

getCharacterData()
    .then(res => console.log(res))
    .catch(err => console.log(err))