import React from 'react';
import './App.css';


// Main Application Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Uni Music</h1>
        <p className="paragraph">
          One day, as I was humming a simple tune, an idea struck me—a song started forming in my mind. The melody felt so natural, and the words began flowing effortlessly. I quickly wrote it down, realizing I had created something truly personal and special. Now, I dream of sharing this song with the world, hoping it will resonate with others just as deeply as it does with me. It’s amazing how a small moment can spark such creativity, turning a hum into a heartfelt expression of emotion and story.
        </p>
      </header>
      <main>
        <Song />
        <Contact />
      </main>
    </div>
  );
}

// Song Component
function Song() {
  return (
    <div className="song">
      <h2 className="songtitle">🌠Starlight Rush🌠</h2>
      <p className="song-verse">
        <strong>Verse 1:</strong> <br />
        Blast off, let's ignite,<br />
        Rocket fuel, burning bright.<br />
        In a cosmos, we'll find our way,<br />
        Dancing stars, every single day.
      </p>
      <p className="song-chorus">
        <strong>Chorus:</strong> <br />
        Riding the galaxy wave,<br />
        Electric hearts, ur spirits sway.<br />
        Unstoppable, we're on the rise<br />
        Cosmic dream, our souls alive.
      </p>
      <p className="song-verse">
        <strong>Verse 2:</strong> <br />
        Zooming through, the astroid belt,<br />
        Laughter echoes, our hearts felt.<br />
        In the nebula, we,ll find our home,<br />
        Where friendship shines were never alone.
      </p>
      <p className="song-chorus">
        <strong>Chorus:</strong> <br />
        Riding the galaxy wave,<br />
        Electric hearts, ur spirits sway.<br />
        Unstoppable, we're on the rise<br />
        Cosmic dream, our souls alive.
      </p>
      <p className="song-verse">
        <strong>Verse 3:</strong> <br />
        Flying high, through cosmic storm,<br />
        Our hearts united, we'll never form.<br />
        In the vastness, we'll find our voice,<br />
        Shouting loud, our cosmic choice.
      </p>
      <p className="song-chorus">
        <strong>Chorus:</strong> <br />
        Riding the galaxy wave,<br />
        Electric hearts, ur spirits sway.<br />
        Unstoppable, we're on the rise<br />
        Cosmic dream, our souls alive.
      </p>
      <p className="song-verse">
        <strong>Verse 4:</strong> <br />
        Throught wormholes, we'll travel far,<br />
        Discovering worlds, like shining stars.<br />
        Our friendship will light the way,<br />
        In the darkness of space, we'll play.
      </p>
      <p className="song-chorus">
        <strong>Chorus:</strong> <br />
        Riding the galaxy wave,<br />
        Electric hearts, ur spirits sway.<br />
        Unstoppable, we're on the rise<br />
        Cosmic dream, our souls alive.
      </p>
      <p className="song-verse">
        <strong>Verse 5:</strong> <br />
        Beyond the stars, we'll find our fate,<br />
        Infinite skies, our hearts create.<br />
        A celestial bond, forever strong,<br />
        Together we'll shine, all day long.
      </p>
      <p className="song-chorus">
        <strong>Chorus:</strong> <br />
        Riding the galaxy wave,<br />
        Electric hearts, ur spirits sway.<br />
        Unstoppable, we're on the rise<br />
        Cosmic dream, our souls alive.
      </p>
      <p className="song-verse">
        <strong>Outro:</strong> <br />
        In the starlight, we'll forever shine,<br />
        Our cosmic rush, a celestial rhyme.<br />
        Heart united, we'll soar through time,<br />
        Starlight Rush, our cosmic prime.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Feel free to reach out!</p>
      <a href="mailto:affafjibran@gmail.com">Email Us</a>
    </section>
  );
}


export default App;
