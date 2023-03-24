const prom = (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(params === true){
            resolve('hello world')
        } else {
            reject('Error')
        }
        }, 1000)
    })
}

const handleSuccess = (data) => {
    console.log(data);
}

const handleFailure = (data) => {
    console.log('this is a failure');
    console.log(data);
}

// then รับ params 2 ตัว คือ
// 1 รับ resolve
// 2 รับ reject

// prom(true).then(handleSuccess, handleFailure) // hello world
// prom(false).then(handleSuccess, handleFailure) //this is a failure  , Error

// //เหมือนบรรทัด 27
// prom(false).then(handleSuccess).catch(handleFailure) //this is a failure  , Error




const prom2 = (params) => {
    return new Promise((resolve, reject) => {
        resolve(params + " " + 'from prom2')
    })
}

prom(true).then((resolveValue) =>{      // //hello world from prom2
    return prom2(resolveValue)
})
.then((resolveValueFromProm2) => {
    console.log(resolveValueFromProm2)
})