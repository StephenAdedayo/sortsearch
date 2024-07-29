const summation = (app) => {
      let sum = 0
      let i = 0

      while(i < app.length){
        sum += app[i]
        i++
      }
      return sum
}

console.log(summation([1,2,3,4]));