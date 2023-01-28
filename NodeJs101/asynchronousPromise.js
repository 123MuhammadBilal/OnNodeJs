// asynchronous control with Promise

a=2;
b=4;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },200)
})


waitingData.then((data)=>{
    console.log(data+b)
})