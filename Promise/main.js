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
// function Promise(callback) {
//     const resolve = () => {
//         return {
//             status:
//             result:
//     }}
//     const reject = () => {
//         return {
//             status:
//             result:
//     }}
//     callback(resolve, reject)
// }

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



//static methods Promise, and async await
// Promise.all || allSelected ||any || race || async await

// const promise1 = fetch('https://yahoo.com/?query=js')
// const promise2 = fetch('https://google.com/?query=js')
// const promise3 = fetch('https://duckduckgo.com/?query=js')
//
// const bigPromise = Promise.all([promise1, promise2, promise3])
// bigPromise.then((bigData) => {
//     console.log(bigData)})
// we get data as an array



//the same, only is shorter
Promise.all([
    fetch('https://yahoo.com/?query=js'),
    fetch('https://google.com/?query=js'),
    fetch('https://duckduckgo.com/?query=js')
]). then((bigData)=> {
    console.log(bigData)
}).catch((err) => {
    console.log('Error' , err)
})

//promise race,return the first resolved promise
// subscribe to the result of the first promise, which runs
// we pass or transmit(передаем) also array
Promise.race([
    fetch('https://yahoo.com/?query=js'),
    fetch('https://google.com/?query=js'),
    fetch('https://duckduckgo.com/?query=js')
]).then((data) => {
    console.log(data.url)
}).catch((err) => {
    console.log('error',err)
})

//promise allSettled // does not return catch
// is always resolve, but by other objects
// we are always hit(попасть) in then
Promise.allSettled([
    fetch('https://yahoo.com/?query=js'),
    fetch('https://google.com/?query=js'),
    fetch('https://duckduckgo.com/?query=js')
]).then((data) => {
    console.log(data.url)
}).catch((err) => {
    console.log('error',err)
})
//response status:'rejected' reason: FetchError: request to http://.....


//Promise.any
// even there is a mistake method will continue to work
// provides only error-free responses, does not process requests with error and is not included in the catch method
Promise.any([
    fetch('https://yahoo.com/?query=js'),
    fetch('https://google.com/?query=js'),
    fetch('https://duckduckgo.com/?query=js')
]).then((data) => {
    console.log(data.url)
}).catch((err) => {
    console.log('error',err)
})

// async await

const foo = async() => {
    try {
        const data1 = await fetch('https://yahoo.com/?query=js')
        const data2 = await  fetch('https://google.com/?query=js')
        const data3 = await fetch('https://duckduckgo.com/?query=js')
    }
    catch(e){
        console.log(e)
    }
}

//will be implemented sequentially(последовательно), one by one (один за другим)

