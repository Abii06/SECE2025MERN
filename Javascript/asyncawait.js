async function asAw(){
console.log("This is async function")
    return "This is async/await"
    setTimeout(() => {
        return await ("This is await function")
    },1000);
    return "This is async/await"
}
console.log(asAw())
asAw().then(function(output)
{
    console.log(output)
})