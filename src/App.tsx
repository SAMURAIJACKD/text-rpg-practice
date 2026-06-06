import './App.css'
import { useState } from 'react'
    
    function App() {
      const playerName = 'Ricky'
      const playerLevel = 1
      const playerHealth = 20
      const playerBackpack = ['flashlight', 'rope', 'prybar']
      const [location, setLocation] = useState('Home')
      const [storyText, setStoryText] = useState(`You open your eyes on a couch, looking around you see your home. You don't remember how you got back home, but as you look at your table you see a note. It reads: "${playerName}, you need to complete the demo, then you can join us in the real game. We'll be waiting for you. - The Devs"`)
      function goToCity() {
        setLocation('City')
        setStoryText('You head into the city to see what you can find. As you walk to the Boulevard you see people bustling about. There are shops, some groups calling out to passersby, and vehicles carrying their passengers. What do you want to do?')
      }
      function checkBackpack() {
        setStoryText(`You check your backpack, inside you have: ${playerBackpack.join(', ')}`)
      }
      function roadsideRest() {
        setStoryText(`You set up a bedroll by the side of the road and rest for a while. You feel refreshed and have ${playerHealth} health`)
      }
      return (
        <main>
          <h1>Text RPG Practice</h1>
    
          <section>
            <h2>Player</h2>
            <p>Name: {playerName}</p>
            <p>Level: {playerLevel}</p>
            <p>Health: {playerHealth}</p>
          </section>
    
          <section>
            <h2>Location</h2>
            <p>{location}</p>

            <p>
              {storyText}
            </p>
          
          </section>
    
          <section>
            <h2>Choices</h2>
            <button onClick={goToCity}>Venture into the city</button>
              
            <button onClick={checkBackpack}>Check your backpack</button>
            <button onClick={roadsideRest}>Rest by the road</button>
          </section>
        </main>
      )
    }
    
    export default App