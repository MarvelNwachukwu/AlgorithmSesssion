let sentence = `hey there, motherfucker I hope you fuck yourself over and get shit in your eyes, you cocksucker bitch ass nigga`; 
let newSentence = '';

let curseWord = [
  'motherfucker',
  'fuck',
  'shit',
  'cocksucker',
  'bitch',
  'ass',
  'nigga'
];

let newArray = sentence.split(' ');
console.log(newArray)

newArray.forEach((item) => { 
  curseWord.forEach((i) => { 
    if (i  === item) { 
      newArray[newArray.indexOf(item)] = '***'
    }
    else {
    }
  })
})



//  console.log(sentence.split(' '))
 console.log(newArray)
