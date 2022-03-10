let cinemaJson = [
    {
        state: "Ibadan",
        cinema: [
            {
                name: "Filmhouse, Dugbe",
                noOfSeat: "80",
                movies: [
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Viva Cinema",
                noOfSeat: "56",
                movies: [
                    
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    }
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "filmhouse, Ventura Mall",
                noOfSeat: "120",
                movies: [
                    
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            }
        ]
    },
    {
        state: "Lagos",
        cinema: [
            {
                name: "Genesis Cinema",
                noOfSeat: "95",
                movies: [
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Silverbird, Ikeja",
                noOfSeat: "80",
                movies: [
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Filmhouse, Surulere",
                noOfSeat: "105",
                movies: [
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            }
        ]
    },
    {
        state: "Rivers",
        cinema: [
            {
                name: "Filmhouse PH",
                noOfSeat: "80",
                movies: [
                    
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Pepperoni Cinema",
                noOfSeat: "72",
                movies: [
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Genesis Cinema",
                noOfSeat: "85",
                movies: [
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            }
        ]
    },
    {
        state: "Kano",
        cinema: [
            {
                name: "Sheila Cinema",
                noOfSeat: "97",
                movies: [
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Farida cinema kano",
                noOfSeat: "60",
                movies: [
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Filmhouse Kano",
                noOfSeat: "66",
                movies: [
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            }
        ]
    },
    {
        state: "Delta",
        cinema: [
            {
                name: "Genesis Cinema",
                noOfSeat: "80",
                movies: [
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    
                    
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Habitat Cinema",
                noOfSeat: "88",
                movies: [
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            },
            {
                name: "Silverbird, Warri",
                noOfSeat: "97",
                movies: [
                    {
                        name: "Free Guy",
                        poster: "../Images/free-guy-poster.jpg",
                        Banner: "../Images/free-guy.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/X2m-08cOAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 55min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/13/2021 11:00:00 AM"],
                                date:"August 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["8/25/2021 2:00:00 PM"],
                                date:"August 25, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/5/2021 9:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/13/2021",
                        releaseDate: "August 13, 2021" 
                    },
                    {
                        name: "The King's Man",
                        poster: "../Images/The_Kings_Man-Small-size.jpg",
                        Banner: "../Images/The-Kings-Man-2020-Big-Size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zdBG-iGfes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 11min",
                        showTimes: [
                            {
                                time:["1:50pm"],
                                realTime: ["12/22/2021 1:50:00 PM"],
                                date:"December 22, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["1/8/2022 4:00:00 PM"],
                                date:"January 8, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/22/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Dune",
                        poster: "../Images/dune-small.jpg",
                        Banner: "../Images/dune-big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Sci-fi', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["10:30pm"],
                                realTime: ["9/3/2021 10:30:00 PM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["3:20pm"],
                                realTime: ["9/10/2021 3:20:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/25/2021 8:00:00 PM"],
                                date:"September 25, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "Shang-Chi and the Legend of the Ten Rings",
                        poster: "../Images/shang-chi-small.jpg",
                        Banner: "../Images/shang-chi-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8YjFbMbfXaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 3min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["9/3/2021 11:00:00 AM"],
                                date:"September 3, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/13/2021 4:40:00 PM"],
                                date:"September 13, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/30/2021 2:00:00 PM"],
                                date:"September 30, 2021"
                            }
                        ],
                        date: "9/3/2021",
                        releaseDate: "Semptember 3, 2021" 
                    },
                    {
                        name: "Black Widow",
                        poster: "../Images/blackWidow.jpg",
                        Banner: "../Images/blackWidow-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fp9pNPdNwjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
                        genre: ['Action', 'Adventure'],
                        duration: "2h 14min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Snake Eyes",
                        poster: "../Images/snaheEye-small.jpg",
                        Banner: "../Images/snake-eye-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Upk8OC8DPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested -- even if that means losing the trust of those closest to him.",
                        genre: ['Action', 'Superhero'],
                        duration: "2h 1min",
                        showTimes: [
                            {
                                time:["2:30pm"],
                                realTime: ["7/9/2021 2:30:00 PM"],
                                date:"July 9, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/9/2021",
                        releaseDate: "July 9, 2021" 
                    },
                    {
                        name: "Top Gun: Maverick",
                        poster: "../Images/topGun-small.jpg",
                        Banner: "../Images/Top-Gun-Maverick-Feature-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qSqVVswa420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Pete \"Maverick\" Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
                        genre: ['Action', 'Adventure'],
                        duration: "Nil",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["12/23/2021 10:30:00 AM"],
                                date:"December 23, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/1/2022 4:40:00 PM"],
                                date:"January 1, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/23/2021",
                        releaseDate: "December 23, 2021" 
                    },
                    {
                        name: "Fast and Furious 9",
                        poster: "../Images/fast9Banner.jpg",
                        Banner: "../Images/fast9Big-size.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. His crew soon comes together to stop a world-shattering plot by the most skilled assassin and high-performance driver they've ever encountered -- Dom's forsaken brother.    ",
                        genre: ['Action', 'Adventure', 'Crime'],
                        duration: "2h 23min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/25/2021 1:30:00 PM"],
                                date:"July 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/10/2021 4:40:00 PM"],
                                date:"August 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["8/25/2021 9:00:00 PM"],
                                date:"August 25, 2021"
                            }
                        ],
                        date: "7/25/2021",
                        releaseDate: "July 25 2021" 
                    },
                    {
                        name: "Mortal Kombat Legend",
                        poster: "../Images/mortalKombat-small.jpeg",
                        Banner: "../Images/mortalKomabt-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-BQPKD7eozY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The heroes must travel to Outworld to defend Earthrealm as Scorpion searches for the ancient Kamidogu before it's used to resurrect the One Being.",
                        genre: ['Animation', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/31/2021 10:30:00 AM"],
                                date:"August 31, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["9/10/2021 4:40:00 PM"],
                                date:"September 10, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/20/2021 9:00:00 PM"],
                                date:"September 20, 2021"
                            }
                        ],
                        date: "8/31/2021",
                        releaseDate: "August 31, 2021" 
                    },
                    {
                        name: "Paw Patrol: The Movie",
                        poster: "../Images/pawPatrol-small.jpg",
                        Banner: "../Images/pawPatrol-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRMTr2VZcr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "When their biggest rival, Humdinger, starts wreaking havoc as the mayor of Adventure City, Ryder and everyone's favorite heroic pups kick into high gear to face the challenge. Armed with exciting new gadgets and gear, the PAW Patrol joins forces with a savvy dachshund to save the citizens of Adventure City.",
                        genre: ['Family', 'Adventure'],
                        duration: "1h 30min",
                        showTimes: [
                            {
                                time:["3:30pm", "7:30pm" ],
                                realTime: ["8/20/2021 3:30:00 PM", "8/20/2021 7:30:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["2:40pm"],
                                realTime: ["8/30/2021 2:40:00 PM"],
                                date:"August 30, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/2/2021 10:00:00 PM"],
                                date:"September 2, 2021"
                            }
                        ],
                        date: "8/30/2021",
                        releaseDate: "August 20, 2021" 
                    },
                    {
                        name: "The Colonies",
                        poster: "../Images/theColony-small.jpg",
                        Banner: "../Images/theColony-big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvgRCuNeS7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "An astronaut is shipwrecked on a long-decimated Earth during a research mission. With her crew mates killed or wounded, she alone must decide the fate of the wasteland's remaining populace.",
                        genre: ['Sci-fi', 'Thriller'],
                        duration: "1h 44min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/26/2021 11:00:00 AM"],
                                date:"August 26, 2021"
                            },
                            {
                                time:["2:00pm"],
                                realTime: ["9/1/2021 2:00:00 PM"],
                                date:"September 1, 2021"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["9/10/2021 9:00:00 PM"],
                                date:"September 10, 2021"
                            }
                        ],
                        date: "8/26/2021",
                        releaseDate: "August 26, 2021" 
                    },
                    {
                        name: "Sucide Squad",
                        poster: "../Images/the-sucide-squad-small-size.jpg",
                        Banner: "../Images/The-Suicide-Squad-Big-size.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jz1FrtMIh5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
                        genre: ['Adventure', 'Action'],
                        duration: "1h 17min",
                        showTimes: [
                            {
                                time:["10:30am"],
                                realTime: ["8/6/2021 10:30:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["8/24/2021 4:40:00 PM"],
                                date:"August 24, 2021"
                            },
                            {
                                time:["10:00pm"],
                                realTime: ["9/5/2021 10:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Jungle Cruise",
                        poster: "../Images/jungleCruise-small.jpg",
                        Banner: "../Images/JungleCruise-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvTIzMyLFSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
                        genre: ['Adventure', 'Fantasy'],
                        duration: "2h 7min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["7/30/2021 1:30:00 PM"],
                                date:"July 30, 2021"
                            },
                            {
                                time:["2:20pm"],
                                realTime: ["8/17/2021 2:20:00 PM"],
                                date:"August 17, 2021"
                            },
                            {
                                time:["8:00pm"],
                                realTime: ["9/5/2021 8:00:00 PM"],
                                date:"September 5, 2021"
                            }
                        ],
                        date: "7/30/2021",
                        releaseDate: "July 30, 2021" 
                    },
                    {
                        name: "OLD",
                        poster: "../Images/OLD-small.jpg",
                        Banner: "../Images/OLD-Big.jpg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A4U2pMRV9_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",
                        genre: ['Thriller'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["11:00am"],
                                realTime: ["8/6/2021 11:00:00 AM"],
                                date:"August 6, 2021"
                            },
                            {
                                time:["4:00pm"],
                                realTime: ["8/20/2021 4:00:00 PM"],
                                date:"August 20, 2021"
                            },
                            {
                                time:["9:30pm"],
                                realTime: ["9/1/2021 9:30:00 PM"],
                                date:"September 1, 2021"
                            }
                        ],
                        date: "8/6/2021",
                        releaseDate: "August 6, 2021" 
                    },
                    {
                        name: "Spider-Man: No Way Home",
                        poster: "../Images/spiderman-small.jpg",
                        Banner: "../Images/spidermanNoWay-Big.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N6wMMMt5DY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:30pm"],
                                realTime: ["12/25/2021 1:30:00 PM"],
                                date:"December 25, 2021"
                            },
                            {
                                time:["4:40pm"],
                                realTime: ["1/10/2022 4:40:00 PM"],
                                date:"January 10, 2022"
                            },
                            {
                                time:["9:00pm"],
                                realTime: ["1/25/2022 9:00:00 PM"],
                                date:"January 25, 2022"
                            }
                        ],
                        date: "12/25/2021",
                        releaseDate: "2021" 
                    },
                    {
                        name: "No Time To Die",
                        poster: "../Images/noTimeTo.jpg",
                        Banner: "../Images/noTimeToDieBig.jpeg",
                        trailer: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmSsVpWn29I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        description: "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
                        genre: ['Action', 'Adventure'],
                        duration: "1h 58min",
                        showTimes: [
                            {
                                time:["1:00pm"],
                                realTime: ["11/25/2021 1:00:00 PM"],
                                date:"November 25, 2021"
                            },
                            {
                                time:["3:40pm"],
                                realTime: ["12/10/2021 3:40:00 PM"],
                                date:"December 10, 2021"
                            },
                            {
                                time:["7:00pm"],
                                realTime: ["12/25/2021 7:00:00 PM"],
                                date:"December 25, 2021"
                            }
                        ],
                        date: "11/25/2021",
                        releaseDate: "2021" 
                    },
                    
                ],
                nowShowing:[
                    
                ],
                upcomingMovies:[
                    
                ]
            } 
        ]
    }
]
for (let i = 0; i < cinemaJson.length; i++) {
    let z = cinemaJson[i]
    for (let j = 0; j < z.cinema.length; j++) {
        let y = z.cinema[j]
        y.availableSeat = []
        y.pickedSeat = []
        // console.log(y);
    } 
}
localStorage.setItem('CinemaJson', JSON.stringify(cinemaJson))