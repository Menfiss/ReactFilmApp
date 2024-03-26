const movies =  [
    {
      id: "1",
      title: "Inception",
      year: 2010,
      genre: "Action",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      director: "Christopher Nolan",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      imageUrl: "https://image.tmdb.org/t/p/original/rWDkbJlIyqN8KcqXajh9sZMwGzo.jpg",
      poster: "https://image.tmdb.org/t/p/original/bgIt92V3IDysoAIcEfOo2ZK9PEv.jpg",
      trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0?si=1VFs1dJ3mUdUv4qk&amp;controls=0",
      rating: 84
    },
    {
      id: "2",
      title: "The Godfather",
      year: 1972,
      genre: "Drama",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      director: "Francis Ford Coppola",
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      imageUrl: "https://image.tmdb.org/t/p/original/AbgEQO2mneCSOc8CSnOMa8pBS8I.jpg",
      poster: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      trailerUrl: "https://www.youtube.com/embed/UaVTIH8mujA?si=MgU32Ijp2G5e_vbf&amp;controls=0",
      rating: 87
    },
    {
      id: "3",
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      director: "Christopher Nolan",
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      imageUrl: "https://image.tmdb.org/t/p/original/efMhrHXZ4cQgGelVomuhEN3Sk2p.jpg",
      poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY?si=3Vf3z3zvQ9m3v4qk&amp;controls=0",
      rating: 85
    },
    {
        id: "4",
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
        imageUrl: "https://image.tmdb.org/t/p/original/1FRLkF7lJFEhn0y4WfLcQMS4rBz.jpg",
        poster: "https://image.tmdb.org/t/p/original/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
        trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY?si=4Vf4z4zvQ9m4v4qk&amp;controls=0",
        rating: 85
    },
    {
        id: "5",
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        imageUrl: "https://image.tmdb.org/t/p/original/xXXFdqV965crlxCO3dj3PhtcCAf.jpg",
        poster: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco?si=ru5p7rSFdR9yV67P&amp;controls=0",
        rating: 87
    },
    {
        id: "6",
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        director: "David Fincher",
        actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        imageUrl: "https://image.tmdb.org/t/p/original/b9HyPoxwxjxkWEUL5ErZdhApQe2.jpg",
        poster: "https://image.tmdb.org/t/p/original/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
        trailerUrl: "https://www.youtube.com/embed/qtRKdVHc-cE?si=6Vf6z6zvQ9m6v4qk&amp;controls=0",
        rating: 84
    },
    {
        id: "7",
        title: "The Matrix",
        year: 1999,
        genre: "Action",
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        director: "Lana Wachowski, Lilly Wachowski",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        imageUrl: "https://image.tmdb.org/t/p/original/oMCUPlwnk2z3QDnzXBxYY6hJogQ.jpg",
        poster: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        trailerUrl: "https://www.youtube.com/embed/m8e-FF8MsqU?si=7Vf7z7zvQ9m7v4qk&amp;controls=0",
        rating: 82
    },
    {
        id: "8",
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        description: "The story follows the life of Forrest Gump, a slow-witted but kind-hearted man from Alabama, who witnesses and unwittingly influences several defining historical events in the 20th century United States.",
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        imageUrl: "https://image.tmdb.org/t/p/original/vwkDy2wDm2aglYDprOSuVgT5J1L.jpg",
        poster: "https://image.tmdb.org/t/p/original/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
        trailerUrl: "https://www.youtube.com/embed/bLvqoHBptjg?si=8Vf8z8zvQ9m8v4qk&amp;controls=0",
        rating: 85
    },
    {
        id: "9",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: "Adventure",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        director: "Peter Jackson",
        actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        imageUrl: "https://image.tmdb.org/t/p/original/gU84vBGG2x8K3x1zrz4SggiN5hr.jpg",
        poster: "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        trailerUrl: "https://www.youtube.com/embed/V75dMMIW2B4?si=9Vf9z9zvQ9m9v4qk&amp;controls=0",
        rating: 84
    }
    
  ];

export default movies;