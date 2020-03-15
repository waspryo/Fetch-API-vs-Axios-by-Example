// // Promise

// const getCharacterData = () => {
//     return new Promise(function(resolve, reject) {
//         const error = false;

//         if (!error) {
//             setTimeout(() => {
//                 resolve({ id: 1, name: 'Rick Wick' });
//             }, 1000);
//         } else {
//             reject('Error getting data')
//         }
//     })
// }

// getCharacterData()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const url = 'https://rickandmortyapi.com/api/character/1'

// fetch(url)
//     .then((res) => {
//         console.log('response ok', res.ok);
//         if (!res.ok) {
//                 throw 'Error';
//         }
//         return res.json();
//     }).then((data) => {
//         console.log('data', data);
//     })
//     .catch(err => {
//         console.log('error', err)
//     })

// axios(url)
//     .then(res => {
//         console.log('response:', res.data)
//     })
//     .catch(err => {
//         console.log('error', err)
//     })

// const getCharacterLocationAsync = async url => {
//     const res = await axios(url)

//     console.log('response data:', res.data);
    
//     const res2 = await axios(res.data.location.url)
//     console.log('response2 data:', res2.data);
    
// }

// getCharacterLocationAsync(url)