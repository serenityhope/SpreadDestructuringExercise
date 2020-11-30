const mcuShows = [
    "The Falcon And The Winter Soldier",
    "WandaVision"
  ];
  
  const starWarsShows = [
    "The Mandalorian",
    "The Clone Wars"
  ];
  
  const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    `The Right Stuff`
  ];
  
  console.log(disneyPlusShows);
  
  const netflixMovies = {
    action: `Extraction`,
    drama: `The Irishman`
  };
  
  const disneyPlusMovies = {
    musical: `Hamilton`,
    drama: `Togo`
  };
  
  const streamingMovies = {
    ...disneyPlusMovies,
    ...netflixMovies,
    comedy: "The Big Sick"
  };
  
  console.log(streamingMovies);
  
  const disneyJunior = [
    "PJ Masks",
    "Jake and the Neverland Pirates"
  ];
  
  const [pj, jake] = disneyJunior;
  
  console.log(pj, jake);
  
  const avengers = {
    captainAmerica: `Steve Rogers`,
    theHulk: `Bruce Banner`
  };
  
  const {captainAmerica, theHulk} = avengers;
  
  console.log(captainAmerica, theHulk);
  
  const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton", 
    ironMan: "Tony Stark"
  };
  

  const {blackWidow: nat, ...others} = moreAvengers;
  
  console.log(nat, others);
  
  // BONUS
  
  const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
  
  const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
  ];
  console.log(all);
  
  const {first, second, third} = bonus;
  const [one, two, three] = first;
  const [four, five, six] = second;
  const [seven, eight, nine] = third;
  console.log(one, two, three, four, five, six, seven, eight, nine);
  