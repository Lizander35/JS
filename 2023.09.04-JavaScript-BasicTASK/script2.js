function greeting(isLoggedIn, userName, isBirthday) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  
    let greetingMessage = "";
  
    if (isLoggedIn) {
      if (isBirthday) {
        greetingMessage = `Good Morning, ${userName} and have a great birthday!`;
      } else {
        greetingMessage = `Good Morning, ${userName}.`;
      }
    } else {
      greetingMessage = "Good Morning";
    }
  
    if (currentHour >= 5 && currentHour <= 12) {
      greetingMessage = "Good Morning";
    } else if (currentHour >= 13 && currentHour <= 18) {
      greetingMessage = "Good Afternoon";
    } else {
      greetingMessage = "Good Evening";
    }
  
    return greetingMessage;
  }
  
  // Pavyzdinės situacijos:
  console.log(greeting(true, "Tom", false)); // "Good Morning"
  console.log(greeting(true, "Tom", true));  // "Good Morning"
  console.log(greeting(false, "", false));    // "Good Morning"
  console.log(greeting(true, "Tom", false));  // "Good Morning"
  console.log(greeting(true, "Tom", true));   // "Good Morning"
  console.log(greeting(false, "", false));     // "Good Morning"
  console.log(greeting(false, "", false));     // "Good Morning"
  console.log(greeting(false, "", false));     // "Good Morning"
  