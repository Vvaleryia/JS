const axios = {}
const findUserInDB = (id) => {
}
// promise it is object,which has the most important method 'then' by which we can subscribe to...
// promise - are promises us come some data
// promise it is object that can be in one of three states: pending , resolved /rejected

promise1.then((data) => {
    console.log(data)
})

// promise2
//     .then((user) => {
//         console.log(user)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('finish')
//     })


const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(100)
promise2
    .then((user) => {
        console.log(user)
    })


//static methods
const otherPromise = Promise.all([promise1, promise2])
//resolve only when promise1 and promise2 will have the status 'resolved' or 'rejected'
otherPromise
    .then((results) => {
        const dataFromGoogle = results[0]
        const dataFromDB = results[1]
        console.log(dataFromGoogle.data.vacancies + ';' + dataFromDB.name)
    })
    .catch(() => {
        console.log('Initialization failed.Try later')
    })


//different processing
const otherPromise1 = Promise.allSettled([promise1, promise2])
//allSettled - all promise will resolved , when they come out of their status - pending
otherPromise1
    .then((results) => {
        const dataFromGoogle = results[0].status === 'fulfilled'
            ? results[0].value
            : {data: {vacancies: null}}
        const dataFromDB = results[1].status === 'fulfilled'
            ? results[1].value
            : {name: results[1].reason}
        console.log(dataFromGoogle.data.vacancies + ';' + dataFromDB.name)
    })
    .catch(() => {
        console.log('Initialization failed.Try later')
    })

//immediately resolved or rejected
const resolvedPromise = Promise.resolve(100)
const rejectedPromise = Promise.reject({message: 'Some error'})

rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{nane: 'L'}, {name: 'V'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect Login and password'})
        } else {
            return Promise.resolve({name: 'Valeryia', id: 1})
        }
    }
}

usersAPI.login('123', '432')
    .then((data) => {
        //make redirect
    })
    .catch((error) => {
        //show error
    })
const promise1 = usersAPI.getAllUsers()
promise1
    .then(users => console.log(users))