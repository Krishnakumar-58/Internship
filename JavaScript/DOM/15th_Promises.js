let promise=new Promise(function(resolve,reject)
{
    let success=true;
    if(success)
    {
        resolve("task complete");
        console.log("data received ");
    }
    else
    {
        reject("task failed!");
        console.log("failed");
    }
})