let ex=prompt("Enter any expression:");

function cal(ex){
    console.log(ex);
    try{
        return new Function('return' + ex)();
    }catch(error){
        return "Error";
    }
}

alert(cal(ex));