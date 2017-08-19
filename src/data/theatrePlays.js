const theatrePlays = [
  {
    id: 'wicked',
    name: 'Wicked',
    image: 'wicked.jpg',
    cover: 'wicked-cover.jpg',
    description: 'Wicked, the Broadway sensation, looks at what happened in the Land of Oz…but from a different angle. Long before Dorothy arrives, there is another girl, born with emerald-green skin—smart, fiery, misunderstood, and possessing an extraordinary talent. When she meets a bubbly blonde who is exceptionally popular, their initial rivalry turns into the unlikeliest of friendships…until the world decides to call one “good,” and the other one “wicked.” With a thrilling score that includes the hits “Defying Gravity,” “Popular” and “For Good,” Wicked has been hailed by The New York Times as “the defining musical of the decade.” Time Magazine cheers, “if every musical had the brain, the heart, and the courage of Wicked, Broadway really would be a magical place.” The Gershwin Theatre on 50th Street and Broadway is that magical place. From the first electrifying note to the final breathtaking moment, Wicked—the untold true story of the Witches of Oz—transfixes audiences with its wildly inventive story. It will send your spirits soaring to heights you’ll never forget.',
    awards: [
      { year: '2004', category: 'Best musical' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
  {
    id: 'the-lion-king',
    name: 'The Lion King',
    image: 'the-lion-king.jpg',
    cover: 'the-lion-king-cover.jpg',
    description: 'A lively stage adaptation of the Academy Award-winning 1994 Disney film, The Lion King is the story of a young lion prince living in the flourishing African Pride Lands. Born into the royal family, precocious cub Simba spends his days exploring the sprawling savanna grasslands and idolizing his kingly father, Mufasa, while youthfully shirking the responsibility his position in life requires. When an unthinkable tragedy, orchestrated by Simba’s wicked uncle, Scar, takes his father’s life, Simba flees the Pride Lands, leaving his loss and the life he knew behind. Eventually companioned by two hilarious and unlikely friends, Simba starts anew. But when weight of responsibility and a desperate plea from the now ravaged Pride Lands come to find the adult prince, Simba must take on a formidable enemy, and fulfill his destiny to be king. A vibrant and exciting tale from the great creatives at Disney, The Lion King is a story of love and redemption that nobody should miss.',
    awards: [
      { id: 1, year: '2004', category: 'Best musical' },
      { id: 2, year: '2005', category: 'Best screenplay' },
      { id: 3, year: '2010', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago',
    image: 'chicago.jpg',
    cover: 'chicago-cover.jpg',
    description: 'Set in the legendary city during the roaring “jazz hot” 20s, Chicago tells the story of two rival vaudevillian murderesses locked up in Cook County Jail. Nightclub star Velma’s serving time for killing her husband and sister after finding the two in bed together. Driven chorus girl Roxie’s been tossed in the joint for bumping off the lover she’s been cheating on her husband with. Not one to rest on her laurels, Velma enlists the help of prison matron Mama Morton and slickster lawyer Billy Flynn, who turn Velma’s incarceration into a murder-of-the-week media frenzy, thus preparing the world for a splashy showbiz comeback. But Roxie’s got some of her own tricks up her sleeve…',
    awards: [
      { id: 1, year: '2004', category: 'Best musical' },
      { id: 2, year: '2005', category: 'Best screenplay' },
      { id: 3, year: '2010', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
  {
    id: 'waitress',
    name: 'Waitress',
    image: 'waitress.jpg',
    cover: 'waitress-cover.jpg',
    description: 'Based on the 2007 film by the late Adrienne Shelly, Waitress follows Jenna, a pregnant waitress in the south trapped in an abusive marriage and looking for a happy ending. She finds relief—and potentially that happy ending—by making creatively titled pies and forming a romance with an unlikely newcomer.',
    awards: [
      { id: 1, year: '2004', category: 'Best musical' },
      { id: 2, year: '2005', category: 'Best screenplay' },
      { id: 3, year: '2010', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
  {
    id: 'charlie-and-the-chocolate-factory',
    name: 'Charlie and the Chocolate Factory',
    image: 'charlie-and-the-chocolate-factory.jpg',
    cover: 'charlie-and-the-chocolate-factory-cover.jpg',
    description: 'Roald Dahl’s treasured tale is now Broadway’s Golden Ticket! It’s the perfect recipe for a delectable treat: songs from the original film, including “Pure Imagination,” “The Candy Man” and “I’ve Got a Golden Ticket,” alongside a toe-tapping and ear-tickling new score from the songwriters of Hairspray.',
    awards: [
      { id: 1, year: '2004', category: 'Best musical' },
      { id: 2, year: '2005', category: 'Best screenplay' },
      { id: 3, year: '2010', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
  {
    id: 'cats',
    name: 'Cats',
    image: 'cats.jpg',
    cover: 'cats-cover.jpg',
    description: 'Based on T.S. Eliot\'s Old Possum\'s Book of Practical Cats, Andrew Lloyd Webber\'s classic musical tells the story of the Jellicle cats and each cat\'s individual quest to be selected as the lucky one who will ascend to "the Heaviside Layer."',
    awards: [
      { id: 1, year: '2004', category: 'Best musical' },
      { id: 2, year: '2005', category: 'Best screenplay' },
      { id: 3, year: '2010', category: 'Best cast' }
    ],
    nominations: [
      { year: '2004', category: 'Best coreography' },
      { year: '2004', category: 'Best screenplay' },
      { year: '2004', category: 'Best songs' }
    ]
  },
];

export default theatrePlays;
