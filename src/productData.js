import uniqid from 'uniqid';
import catanImg from './images/product images/Catan-boxart.jpg';
import pandemicImg from './images/product images/Pandemic-boxart.jpg';
import codenamesImg from './images/product images/codenames-boxart.jpg';
import resistanceImg from './images/product images/resistance-boxart.jpg';
import onuwImg from './images/product images/onuw-boxart.jpg';
import monopolyImg from './images/product images/monopoly-boxart.jpg';
import sorryImg from './images/product images/sorry-boxart.jpg';
import scrabbleImg from './images/product images/scrabble-boxart.webp';
import clueImg from './images/product images/clue-boxart.webp';
import lifeImg from './images/product images/life-boxart.jpg';
<<<<<<< HEAD
=======
import cahImg from './images/product images/cah.png';
import riskImg from './images/product images/risk-boxart.webp';
import ticketToRideImg from './images/product images/Ticket to Ride-boxart.jpeg';
>>>>>>> 7a0d036 (Add additional products, product descriptions, and styling tweaks)

export const productData = [
  {
    name: 'Settlers of Catan',
    price: 10.11,
    category: 'Strategy',
    description:
      'Settlers of Catan is a classic and beloved strategy game that transports players to the vibrant world of exploration and resource management. As settlers on the island of Catan, players compete to build and expand their settlements while trading and negotiating with one another. With a modular board that changes with each playthrough, no two games are the same. Use your wit and strategy to gather resources, build roads, cities, and developments, and strategically position yourself for victory. With its accessible gameplay and endless possibilities, Settlers of Catan is a must-have for both casual and experienced gamers looking for an immersive and engaging experience. Embark on an epic journey of discovery, trade, and conquest, and become the master of Catan!',
    inStock: true,
    imgSrc: catanImg,
    // id: uniqid(),
  },
  {
    name: 'Pandemic',
    price: 12.22,
    category: 'Strategy',
    description:
      'Pandemic is an intense and collaborative board game that puts players in the roles of disease-fighting specialists. As members of an elite team, players must work together to contain and eradicate deadly diseases threatening to spread across the globe. With each player possessing unique abilities, strategic planning and efficient resource management are key to success. Can you save humanity from the brink of devastation? Join forces and test your wits in this thrilling race against time in Pandemic, where teamwork is crucial and the fate of the world rests in your hands.',
    inStock: true,
    imgSrc: pandemicImg,
    // id: uniqid(),
  },
  {
    name: 'Codenames',
    price: 13.33,
    category: 'Social',
    description:
      'Codenames is a fast-paced and highly addictive word association game that will put your communication skills to the test. In this team-based game, players take on the roles of spymasters, providing one-word clues to help their teammates guess secret agent codenames on a grid of word cards. But be careful, as there are hidden assassins waiting to sabotage your mission! With its simple rules and endless replayability, Codenames is perfect for game nights and gatherings of all sizes. Challenge your friends to decipher the code and prove your mastery of deduction and wordplay. Get ready for a thrilling and brain-teasing adventure with Codenames!',
    inStock: true,
    imgSrc: codenamesImg,
    // id: uniqid(),
  },
  {
    name: 'The Resistance',
    price: 14.44,
    category: 'Social',
    description:
      'The Resistance is a gripping social deduction board game that pits players against each other in a battle between spies and resistance fighters. Set in a dystopian world where an oppressive regime holds sway, players must navigate a web of deceit and trust to determine who can be trusted and who is secretly working for the enemy. With hidden roles and secret missions, The Resistance challenges your ability to read others and make critical decisions. Can you uncover the spies and lead the resistance to victory, or will the agents of tyranny prevail?',
    inStock: false,
    imgSrc: resistanceImg,
    // id: uniqid(),
  },
  {
    name: 'One Night Ultimate Werewolf',
    price: 15.5,
    category: 'Social',
    description:
      'One Night Ultimate Werewolf is a thrilling and fast-paced social deduction game that will keep you on the edge of your seat. As the sun sets in the village, players are assigned secret roles as either innocent villagers or cunning werewolves. The twist? the game lasts only one night! Players must use their powers of persuasion, deduction, and deception to determine who is a werewolf and who is not. With unique abilities and ever-changing roles, each game is a unique and intense experience. Will the villagers discover the werewolves and eliminate them, or will the werewolves successfully deceive everyone and claim victory? Gather your friends, sharpen your instincts, and dive into the captivating world of One Night Ultimate Werewolf for an unforgettable gaming experience.',
    inStock: true,
    imgSrc: onuwImg,
    // id: uniqid(),
  },
  {
    name: 'Monopoly',
    price: 3.99,
    category: 'Classic',
    description:
      'Monopoly, the timeless classic, is the ultimate game of wealth and strategy that has been captivating players for generations. Enter a world where you can become a real estate mogul, buying and trading properties, charging rent, and amassing your fortune. With iconic tokens and familiar locations, Monopoly offers a thrilling experience of competition and negotiation. But watch out for unexpected surprises like Chance and Community Chest cards that can make or break your fortune. Will you make shrewd investments and bankrupt your opponents, or will you fall victim to their clever tactics? Gather your family and friends, roll the dice, and embark on an unforgettable journey of high-stakes capitalism in the exciting world of Monopoly.',
    inStock: true,
    imgSrc: monopolyImg,
  },
  {
    name: 'Sorry!',
    price: 9.99,
    category: 'Classic',
    description:
      'Sorry! is a classic board game of sweet revenge and unexpected twists that guarantees hours of laughter-filled fun. In this family-friendly game, players navigate their pawns around the board, aiming to be the first to bring all their pieces home. But be prepared for the chaos, as opponents can send your pawns back to the start with a well-timed "Sorry!" card. With strategic card play and a dash of luck, Sorry! keeps players on their toes as they try to outmaneuver their opponents and reach victory. This engaging and unpredictable game will bring smiles and friendly competition to your game nights. Apologize not, and let the race begin!',
    inStock: true,
    imgSrc: sorryImg,
  },
  {
    name: 'Scrabble',
    price: 18.99,
    category: 'Classic',
    description:
      "Scrabble is the ultimate wordplay game that challenges your vocabulary and strategic thinking. This iconic board game has stood the test of time, bringing together friends and family for hours of intellectual fun. Use your tiles wisely to create words and strategically place them on the board to maximize your score. With double and triple letter and word scores, every move counts. Whether you're a seasoned wordsmith or a budding linguist, Scrabble offers endless possibilities for creativity and competition. Expand your vocabulary, sharpen your spelling skills, and engage in thrilling battles of wit with Scrabble. It's time to spell your way to victory!",
    inStock: true,
    imgSrc: scrabbleImg,
  },
  {
    name: 'Life',
    price: 16,
    category: 'Classic',
    description:
      "Life is the classic board game that lets you experience the ups and downs of a lifetime in a single game session. Embark on an exciting journey from college to retirement, making important life decisions along the way. Will you choose a career path, start a family, or chase your dreams? With each spin of the wheel, you'll encounter unexpected twists and turns, from unexpected windfalls to challenging setbacks. Navigate the game board, collect Life tiles, and strive to accumulate the most wealth and happiness. Gather your loved ones, roll the dice, and embrace the unpredictable adventure that awaits you in the game of Life.",
    inStock: true,
    imgSrc: lifeImg,
  },
  {
    name: 'Clue',
    price: 9.97,
    category: 'Classic',
    description:
      'Clue is the classic murder mystery board game that will put your detective skills to the test. Step into the role of a skilled investigator and solve the mysterious murder of Mr. Boddy. Explore the rooms of his mansion, collect clues, and interrogate fellow players to unravel the truth. With a combination of deduction and strategy, you must deduce the suspect, weapon, and location of the crime before your opponents do. With multiple scenarios and a variety of possible outcomes, each game of Clue is a thrilling and suspenseful adventure. Will you crack the case and become the master detective, or will the true culprit escape justice? Gather your friends, sharpen your mind, and prepare for an unforgettable night of suspense and intrigue with Clue.',
    inStock: false,
    imgSrc: clueImg,
  },
<<<<<<< HEAD
=======
  {
    name: 'Cards Against Humanity',
    price: 29,
    category: 'Social',
    description:
      'Cards Against Humanity is the hilarious and irreverent party game that pushes the boundaries of humor and laughter. This adult-oriented game challenges players to complete fill-in-the-blank statements with the most outrageous and politically incorrect responses they can muster. With a deck of black cards containing phrases and a deck of white cards with various words or phrases, the combinations are endless. The goal is to create the funniest, most shocking, and absurd combinations to win the round. Cards Against Humanity is perfect for gatherings and parties where no topic is off-limits. Get ready for a wild and unpredictable experience that will have you laughing uncontrollably as you discover just how twisted and creative your friends can be.',
    inStock: true,
    imgSrc: cahImg,
  },
  {
    name: 'Risk',
    price: 31.44,
    category: 'Strategy',
    description:
      'Risk is the ultimate strategic conquest game that transports players to a world of global domination and intense warfare. As a military commander, you must carefully deploy your armies, fortify your territories, and forge alliances to conquer the world. From continent to continent, engage in epic battles, negotiate treaties, and outmaneuver your opponents in a quest for total domination. Will you lead your forces to victory or fall victim to calculated attacks? Risk offers an immersive and dynamic gameplay experience, where every decision carries weight and the stakes are high. Gather your allies, roll the dice, and embark on a thrilling journey of conquest and power in the gripping world of Risk.',
    inStock: true,
    imgSrc: riskImg,
  },
  {
    name: 'Ticket to Ride',
    price: 46.75,
    category: 'Strategy',
    description:
      "Ticket to Ride is an exciting and engaging board game that takes players on a cross-country train adventure. In this strategic and competitive game, players compete to build train routes connecting various cities across the United States (or other regions depending on the edition). Collect colored train cards, claim routes, and complete destination tickets to earn points. With its accessible rules and captivating gameplay, Ticket to Ride is perfect for players of all ages and experience levels. Plan your routes wisely, thwart your opponents' plans, and race against time to become the most successful railroad tycoon. Whether you're a seasoned gamer or new to board games, Ticket to Ride promises hours of fun and strategic thinking. All aboard for an unforgettable journey of railways and rivalries!",
    inStock: true,
    imgSrc: ticketToRideImg,
  },
>>>>>>> 7a0d036 (Add additional products, product descriptions, and styling tweaks)
];
// consider sorting products into categories then list name, price, img
