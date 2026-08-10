function getdata() {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function(response){
            if(!response.ok){
                reject("Api error: "+ response.status)
            }
            return response.json()
        })
        .then(function(data){
            resolve(data);
        })
        .catch(function(error){
            reject(error);
        })
    });
}

getdata()
    .then(function (data) {
        console.log("Daata get:  ")
        console.log(data.name)
        console.log(data.email)
    }).catch(function (error) { 
        console.log(error) 
    })