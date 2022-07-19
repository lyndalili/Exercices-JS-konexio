
/*const promiseDisplay = Promise.resolve("Hello Word")

promiseDisplay.then((value) => {
    setTimeout(() => {

      console.log(value)
    }, 2000)

})*/







const getDisplay = () => {
  
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
       
        const temperature = 2

        if (temperature >= 10) {
          resolve("Il fait froid")
      
        } else {
          reject("Il fait chaud")
        }
      }, 4000)
      
    })
  }
  

  const waitForResult = async () => {
    
      try {
        const result = await getExamResult()
          console.log("la promesse est resolue")
        console.log(result)
      } catch(error) {
          console.log("la promesse est rejetée")
        console.log(error)
      }
  }
  waitForResult()
  