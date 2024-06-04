let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
 


function generadorExcusas() {
   let randomWhoIndex = Math.floor(Math.random() * who.length);
   let randomActionIndex = Math.floor(Math.random() * action.length);
   let randomWhatIndex = Math.floor(Math.random() * what.length);
   let randomWhenIndex = Math.floor(Math.random() * when.length);

   let randomWho = who[randomWhoIndex];
   let randomAction = action[randomActionIndex];
   let randomWhat = what[randomWhatIndex];
   let randomWhen = when[randomWhenIndex];

   return randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
   
}


console.log(generadorExcusas());

















// function generateExcuse() {
//    let randomWhoIndex = Math.floor(Math.random() * who.length);
//    let randomActionIndex = Math.floor(Math.random() * action.length);
//    let randomWhatIndex = Math.floor(Math.random() * what.length);
//    let randomWhenIndex = Math.floor(Math.random() * when.length);

//    let randomWho = who[randomWhoIndex];
//    let randomAction = action[randomActionIndex];
//    let randomWhat = what[randomWhatIndex];
//    let randomWhen = when[randomWhenIndex];

//    return randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
// }

