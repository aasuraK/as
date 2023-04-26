// Promise version
function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Butter");
      }, 2000);
    });
  }
  
  function getCoffee() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Coffee");
      }, 3000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Cold drinks");
      }, 4000);
    });
  }
  
  getButter()
    .then((butter) => {
      console.log(butter);
      return getCoffee();
    })
    .then((coffee) => {
      console.log(coffee);
      return getColdDrinks();
    })
    .then((coldDrinks) => {
      console.log(coldDrinks);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Async/Await version
  async function getGroceries() {
    try {
      const butter = await getButter();
      console.log(butter);
      const coffee = await getCoffee();
      console.log(coffee);
      const coldDrinks = await getColdDrinks();
      console.log(coldDrinks);
    } catch (error) {
      console.error(error);
    }
  }
  
  getGroceries();
  