//Create An Array
let numbers = [1,2,3,4,5,6,7,8,9]

// Using For-Loop
for(let oneNumber of numbers){
    
    let ordinalEnding : string ;
    
    if(oneNumber === 1){
        ordinalEnding = "ST"

    }
    else if(oneNumber === 2){
        ordinalEnding = "ND"
    }
    else if(oneNumber === 3){
        ordinalEnding = "RD"
    }
    else{
        ordinalEnding = "TH"
    }
    console.log(`${oneNumber}${ordinalEnding}`)
    
}