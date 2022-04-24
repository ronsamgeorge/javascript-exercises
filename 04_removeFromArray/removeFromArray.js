const removeFromArray = function() {

    let itemsToSearch = (Array.from(arguments)).slice(1);      //to create an array of the list of arguments except from the Search array at arguments[0]
    let inputArray = arguments[0];


   for(const item of itemsToSearch){
        let isPresent = inputArray.indexOf(item)
        console.log(item);

        if(isPresent == -1)
        {
            console.log(`Item ${item} is not present`);
            continue;
        } else {
            console.log(`Item : ${item} is present at `);
            inputArray.splice(isPresent,1);
        }
   }

   return inputArray;
};


removeFromArray([10,200,30],10,30);
// Do not edit below this line
module.exports = removeFromArray;
