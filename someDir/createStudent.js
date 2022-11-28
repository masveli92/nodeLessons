function studentBuilder (name, age) {
   return{
       name,
       age,
       greeting: () =>{
           console.log('We have new student');
       }
   }
}

module.exports = {
    studentBuilder
}

// module.exports.fName = studentBuilder;

// module.exports = {
//     creator: (name, age) => {
//       return{
//         name,
//         age,
//         greeting: () =>{
//             console.log('We have new student');
//         }
//       }
//     }
// }