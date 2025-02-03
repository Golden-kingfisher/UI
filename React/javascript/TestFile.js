function getSampleResponse(){
    let outputRes = [{
        name: "Benz",
        details: {
            make: "German",
            model: 2018
        }
    }, {
        name: "Ferrari",
        details: {
            make: "US",
            model: 2023
        }
    },
    {
        name: "Audi",
        details: {
            make: "Russia",
            model: 2018
        }
    },
    {
        name: "Lamborgini",
        details: {
            make: "France",
            model: 2018
        }
    }];

    let finalRes = [];
outputRes.map((resObj) => {
    // console.log("Individual object :",  "name :",resObj.name, "  make :", resObj.details.make, " model :", resObj.details.model);

    let obj = {};
    obj.name = resObj.name;
    obj.make = resObj.details.make;
    obj.model = resObj.details.model;

    // console.log("individual obj ", obj);

    finalRes.push(obj);

    // console.log("name :", resObj.name);
    // console.log("make :", resObj.details.make);
    // console.log("model :", resObj.details.model);

})

finalRes.map((obj)=>{

})
console.log("final response",finalRes)
}


// console.log("actual response :", outputRes);

let arr = [1,0,3,-1,8];
arr.length=0;

console.log(arr);



