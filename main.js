function duplicateCount(text){

  text = text.toLowerCase().split(' ').join('').split('')
  // console.log(text)

  textSet = Array.from( new Set(text) )
  // console.log(textSet)

  let count = 0

  for (let i = 0; i < textSet.length; i++) {

    let filtered = text.filter( e => e == textSet[i] )
    // console.log('filtered: ', filtered)
    
    if ( filtered.length > 1 ) count += 1
    
  }

  return count

}

console.log(duplicateCount('hello there'))


// parameters: text    // a string of various-cased letters and numbers
// return: count     // the number of times there are digits/letters that repeat at least once
// e.g. duplicateCount('hello there')
// results in 3


// reassign text to text.toLowerCase().split('')
// declare and assign a variable called count to 0
// loop through text
  // conditional statement: if the length of the string filtered for the current letter in the loop is greater than 1, add 1 and reassign count
// end loop
// return count

