//promise - it's object, deferred action

const fetch = (url, callback) => {
    //.....
    callback()
}

// how the asynchronous code worked before
// fetch('https://books.com/authors', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fetch('https://books.com/authors/1', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fetch('https://books.com/authors/1/book', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://books.com/authors/1/book/45', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                                 fetch('https://books.com/authors/1/book/45/456', (err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {
//
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//promise are create using the function-constructor and word new
// promise are takes in callback(function executor)
// two parameters will be placed in the executor
//promise has three conditions(states): pending / fulfilled/ reject

const server = {
    getData() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res('Some data')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

const promise2 = promise.then((data) => {
    console.log('Then1: ', data)
}) // Then1: Some data
promise2.then((data) => {
    console.log('some data from pormise 2' , data)
}) // undefined



//psevdocode
function Promise(callback) {
    const resolve = () => {
        return {
            status:
            result:
    }}
    const reject = () => {
        return {
            status:
            result:
    }}
    callback(resolve, reject)
}

//promise has methods
//when the status "pending" changes to 'fulfilled' call method .then

promise.then((data) => {
    console.log('Then1 : ' , data)
})
promise.catch((err) => {
    console.log('Catch1: ', err)
})
promise.finally(() => {
    console.log('Finally : ')
})
Promise.reject('reject1')
    .catch((t) => + 'catch1')
    .catch((t) => + 'catch2')
    .then((t) => + 'then1')
    .finally((t) => + 'finally')
    .then((t) => console.log(t))

//return undefined. first step we come in method catch , next then, next finally, and in console.log we have undefined, because don't know what is it t



