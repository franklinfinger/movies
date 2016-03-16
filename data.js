var movies = [
  {
    title: "¡Three Amigos!",
    coverImg: "http://t3.gstatic.com/images?q=tbn:ANd9GcRhn8GL-2Uc7P8aoBmODMjYJJI0AnxtryDLb7WgN1aksxFFTd5S",
    taglines: "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
    plot: "When silent film stars Lucky Day, Dusty Bottoms and Ned Nederlander get fired, they take a job offer from Mexico: Doing a show with El Guapo, supposedly the most famous actor there. Traveling there in hope of getting good money, they arrive only to learn soon that El Guapo is not an actor, but a cruel gang leader suppressing people. He abducts the mayor's beautiful daughter Carmen (to be his wife) in revenge for the people's cry for help. Now, all hopes of the village folks rest on the weak shoulders of three minor-talented actors, who can't just walk off the set this time.",
    releaseDate: "December 12, 1986"
  },
  {
    title: "Harlem Nights",
    coverImg: "http://www.gstatic.com/tv/thumb/dvdboxart/11992/p11992_d_v8_aa.jpg",
    taglines: "They're up to something big.",
    plot: "Sugar Ray is the owner of an illegal casino, who contend with the pressures of vicious gangster and corrupt policemen who want to see him go out of business. In the world of organized crime and police corruption in the 1920s, any dastardly trick is fair!",
    releaseDate: "November 17, 1989"
  },
  {
    title: "Strange Brew",
    coverImg: "http://img2.imagesbn.com/p/12569519923_p0_v2_s260x420.jpg",
    taglines: "The McKenzie brothers beer up under misfortune",
    plot: "In their quest for free beer, bumbling Canadian brothers Bob (Rick Moranis) and Doug McKenzie (Dave Thomas) wind up working at the Elsinore Brewery. The hapless lads uncover a sinister mind-control plot spearheaded by Brewmeister Smith (Max von Sydow) and must stop the scheme, which also involves Uncle Claude (Paul Dooley), a member of the Elsinore family. As Bob and Doug try to prevent Smith from taking over the world, they also manage to drink plenty of their favorite sudsy beverage.",
    releaseDate: "August 26, 1983"
  },
  {
    title: "The Usual Suspects",
    coverImg: "http://hdmovies.name/wp-content/uploads/2015/04/The-Usual-Suspect-1995-HD-720p-BluRay.jpg",
    taglines: "The greatest trick the devil ever pulled was to convince the world he didn't exist",
    plot: "After a number of people are killed and a cargo ship set on fire, Roger 'Verbal' Kint is questioned by U.S. Customs Agent Dave Kujan. Reluctant at first, Verbal begins to tell them what happened starting with when he met four men, all criminals, sharing a holding cell for a few hours. Together, they join forces to successfully hijack a jewel shipment and head to Los Angeles to lay low. There they are contacted by a lawyer, Kobayashi, representing the much-feared international criminal Keyser Söze who wants them to do a job for him. The result is the attack on the cargo ship. Verbal refuses to give evidence in the case and is set free. Only then does Kujan realize what's really happened.",
    releaseDate: "August 16, 1995"
  },
  {
    title: "The 40 Year Old Virgin",
    coverImg: "http://posterwire.com/wp-content/uploads/40-year-old_virgin.jpg",
    taglines: "Better Late Than Never.",
    plot: "Andy Stitzer (Steve Carell) is an amiable single guy who works at a big-box store. Living alone, 40-year-old Andy spends his free time playing video games and curating his action-figure collection. Despite his age, Andy has never had sex, so his friends, including the laid-back David (Paul Rudd), push Andy towards losing his virginity. While attempting to get over his awkwardness around female customers, Andy meets local shop owner Trish (Catherine Keener), and they begin a tentative romance.",
    releaseDate: "August 19, 2005"
  },
  {
    title: "Fight Club",
    coverImg: "https://moviemaster1703.files.wordpress.com/2010/12/fight-club-movie-poster-1020270798.jpg",
    taglines: "Mischeif, Mayhem, Soap.",
    plot: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
    releaseDate: "September 21, 1999"
  },
  {
    title: "Old School",
    coverImg: "http://www.movieposter.com/posters/archive/main/33/MPW-16722",
    taglines: "All The Fun Of College with. None of the Education.",
    plot: "After discovering his girlfriend (Juliette Lewis) has been participating in group sex, attorney Mitch (Luke Wilson) feels his world come undone. He moves into a new place, which happens to be near a college campus, and tries to get his life back together. Two of his best friends, Frank (Will Ferrell) and Beanie (Vince Vaughn), start hanging out at Mitch's house, eventually turning the place into a wild party pad, much to the ire of the college's dean, Gordon 'Cheese' Pritchard (Jeremy Piven).",
    releaseDate: "February 13, 2003"
  },
  {
    title: "The Empire Strikes Back",
    coverImg: "http://t1.gstatic.com/images?q=tbn:ANd9GcTtXwQAEDxEY3E9Nn78H96VZCjlV6hZWPlDd5IpVNyeuzO2vT17",
    taglines: "The Star Wars saga continues",
    plot: "The adventure continues in this 'Star Wars' sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).",
    releaseDate: "May 21, 1980"
  },
  {
    title: "Good Will Hunting",
    coverImg: "http://images.moviepostershop.com/good-will-hunting-movie-poster-1997-1020265472.jpg",
    taglines: "Some people can never believe in themselves, until someone believes in them.",
    plot: "Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire (Robin Williams).",
    releaseDate: "December 5, 1997"
  },
  {
    title: "The Departed",
    coverImg: "http://www.movierulz.to/wp-content/uploads/2013/05/The-Departed-2006.jpg",
    taglines: "Lies. Betrayal. Sacrifice. How far will you take it?",
    plot: "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster's trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other's identities to save their own lives.",
    releaseDate: "October 6, 2006"
  },
];
