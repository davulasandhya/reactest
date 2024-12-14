function Add(x,y)
{
    return x+y;
}
console.log(Add(10,20));


function Add(...args){
    let result=0;
    for(let arg of args)
    {
        result=result+arg;       
    }
    return result;
}
console.log(Add(10,20,30,40,50));