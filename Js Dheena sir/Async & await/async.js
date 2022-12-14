
/**************************
1.async and await
***************************/
let promise = new Promise (function (resolve,reject){
    resolve ("Process is successfull");
});
const getData = async() => {
    try {
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.log(err);
    }
}


/**************************
2.promise()
***************************/
const A = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>resolve ("A value is resolved"),1000)
    })
}

A()
.then(result => console.log(result)
.catch(error => console.log(error))
);

/**************************
3.promise.all()
***************************/
const x = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>resolve ("x value is resolved"),1000)
    })
}
const y = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> resolve ("y value is resolved"),500)
    })
}
const z = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> resolve ("z value is resolved"),5000)
    })
}
Promise.all([x(),y(),z()])
.then(result => console.log("success -",result))
.catch(error => console.log("error -",error))



/**************************
4.promise.allSettled()
***************************/
const x1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>resolve ("x1 value is resolved"),1000)
    })
}
const y1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> reject ("y1 value is reject"),500)
    })
}
const z1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> resolve ("z1 value is resolved"),5000)
    })
}
Promise.allSettled([x1(),y1(),z1()])
.then(result => console.log("success -",result))
.catch(error => console.log("error -",error))


/**********************
 5.promise.race()
***********************/
const x2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>resolve ("x2 value is resolved"),1000)
    })
}
const y2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> reject ("y2 value is reject"),500)
    })
}
const z2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout (()=> resolve ("z2 value is resolved"),5000)
    })
}
Promise.any([x2(),y2(),z2()])
.then(result => console.log("success -",result))
// .catch(error => console.log("error -",error))


/**********************
 5.promisec chaining()
***********************/
let pro = new Promise((resolve, reject) => {
resolve("I hav completed completed BE"); 
});
pro
.then(
	new Promise((resolve, reject) => {
	resolve("Im Velmurugan");
	}).then((result1) => {
	console.log(result1);
	})
)
.then((result2) => {
	console.log(result2);
});

