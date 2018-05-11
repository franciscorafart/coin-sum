let values = [1,2,5,10,20,50,100,200]

//for each number loop through the thing starting at one each time,
let giveOneComb = (ind, values) => {
    let index = ind
    let reminder = 200
    let res=[0,0,0,0,0,0,0,0]
    while(reminder>0){
        let div = reminder/values[index%8]
        reminder = reminder%values[index%8]
        res[index%8]+= div
        console.log(res)
        console.log(reminder)
        console.log(index)
        index +=1
    }
    if (reminder == 0)
        return res
    else return null
}

console.log(giveOneComb(5,values))

//store all the possible combinations for 200 coins or less

//go through all of them calculating their value

//if its equal to 200 store it

//Gives all possible combinations of n in a l size array
let combinations = (n,l) =>{

}
