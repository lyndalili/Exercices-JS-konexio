

// const promessDisplay = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const displayString = "HEllo world"

//             resolve(displayString)
//         }, 2000)
//     })
// }
// const waitForMyResults = async () => {

//     const result = await promessFunction()
//     console.log(result);
// }
// waitForMyResults()






// const getDisplay = () => {
  
//     return new Promise((resolve, reject) => {
      
//       setTimeout(() => {
       
//         const temperature = 2

//         if (temperature >= 10) {
//           resolve("Il fait froid")
      
//         } else {
//           reject("Il fait chaud")
//         }
//       }, 4000)
      
//     })
//   }
//   const waitForResult = async () => {
    
//       try {
//         const result = await getExamResult()
//           console.log("la promesse est resolue")
//         console.log(result)
//       } catch(error) {
//           console.log("la promesse est rejetée")
//         console.log(error)
//       }
//   }
//   waitForResult()
