// Write a function in JavaScript that takes a string as input and returns a 
// new string with all the vowels removed.


function getUpdatedString(input) {
    let str = "hello";
//a,e,i,o,u = RegExp;
     let tempStr = str.match(RegExp);



    let strArray = str.split("");
    
    strArray.map((inpStr) => {
        // console.log(inpStr);
        // inpStr.
    })


}

getUpdatedString("hello");



// Write a function in JavaScript that converts a given string to a title case.

// sample Input: fuNCtiOn in JaVaScRipt

// output :Function In Javascript
function getTitleCaseString(){

    let str1 = "fuNCtiOn in JaVaScRipt";
     let str2 = str1.toLowerCase();
    // console.log(str1.toLowerCase());

     let str1Arr = str2.split(" ");

     str1Arr.map((inpStr)=>{
         let tempStr2 = inpStr.split("")
         let inpChar = inpStr.charAt(0);
        // console.log(tempStr2);
        tempStr2.map((inpStr2)=>{
            console.log(inpStr2);
        })
        // tempStr2.
     })
}

getTitleCaseString();


