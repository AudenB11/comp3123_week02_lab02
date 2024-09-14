function makePromise(a){
    var p1 = new Promise((resolve, reject) => {
        if(a>10){
            const r = {
                status: true,
                message: "I am resolved"}
                resolve(r);
        }else{
            const r = {
                status: false,
                message: "I am rejected"}
                reject(r);
        }
    });
    return p1;
}

console.log('Start of the program')
makePromise(10).then((res) => {console.log(res) },
        (e) => {console.log(e)});

console.log('After the promise')

makePromise(100).then((res) => {console.log(res) })
    .catch((e) => {console.log(e) });

console.log('End of program')

// fetch example:

var p1 = fetch('https://jsonplaceholder.typicode.com/users')
//console.log(p1)
p1.then((res) => {
    console.log(res)
    return res.json()
}).then((data) => {
    console.log(data)
    return "Hello"
}).then((r) => {
    console.log("Hello")
}).catch((e) => {
    console.log(e)
})