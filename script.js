//01-stringCompare.js

const str1 = "Jeff";
const str2 = "jeff";

if (str1 == str2){
    alert(str1 + "and " + str2 +"are not the same!");
}
else{
    alert("They are identical: " + str1);
}

//02-numberCompare.js

const num1 = 13;
const num2 = 15;

if (num1 > num2){
    alert(num1 + " is greater than " + num2);
}

else if (num1 < num2){
    alert(num1 + " is smaller than " + num2);
}

else{
    alert("They are the same: " + num1)
}

//3-functionCombine.js

function concatenate(str1, str2){
    console.log("Result of concatination: " + str1 + str2);

}

//04-functionConditions.js
function whatGame (num){
    if (num == 1){
        return "Animal Crossing";
    }

    else if (num == 2){
        return "Persona 5 The Royal";
    }

    else if (num == 3){
        return "Final Fantacy Remake";
    }
    else{
        return "Ooof, no other games left";
    }

}

//05-randomWords.js
var arr = ["The","quick","fox","jumps","over","the","lazy", "dog"];

console.log(arr[Math.floor(Math.random()*arr.length)]);