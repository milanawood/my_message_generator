// Returns a random Fortune Cookie Message
const returnRandFortune = () => {
    let fortuneMessages = ['Today is going to be a great day', 'Forget injuries; never forget kindnesses', 'Respect yourself and others will respect you', 'It is easier to stay out than to get out', 'You are a great example for others, keep up the good work'];
    let randomNumber = Math.floor(Math.random() * 100);
    let fortuneNumbers = [`Your lucky number is ${randomNumber}`];
    let spiritAnimal = ['a Tiger', 'a Rabbit', 'a Butterfly', 'a Dog', 'a Bear', 'a Cat', 'an Eagle', 'a Snake']
    let randSpiritAnimal = spiritAnimal[Math.floor(Math.random() * 8)]
    let randMessage = fortuneMessages[Math.floor(Math.random() * 5)]
    return `${randMessage}! Your lucky number is ${fortuneNumbers}. Your spirit animal is ${randSpiritAnimal}.`
  }

  console.log(returnRandFortune());
  
  
  /* Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  } 
  */