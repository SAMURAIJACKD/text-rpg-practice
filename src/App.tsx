import { useState } from 'react'
import './App.css'


    function App() {
      const deathText = 'You are dead, maybe wait for a mad scientist to bring you back to life before trying to continue playing?'
      const playerName = 'Ricky'
      const playerLevel = 1
      const playerMaxHealth = 20
      const [playerHealth, setPlayerHealth] = useState(playerMaxHealth)
      const playerBackpack = ['flashlight', 'rope', 'prybar']
      const [location, setLocation] = useState('Home')
      const [storyText, setStoryText] = useState(`You open your eyes on a couch, looking around you see your home. You don't remember how you got back home, but as you look at your table you see a note. It reads: "${playerName}, you need to complete the demo, then you can join us in the real game. We'll be waiting for you. - The Devs"`)
      function goToCity() {
        if (playerHealth >= 1) {
          setLocation('City')
          setStoryText('You head into the city to see what you can find. As you walk to the Boulevard you see people bustling about. There are shops, some groups calling out to passersby, and vehicles carrying their passengers. What do you want to do?')
      } else {
        setStoryText(deathText)
      }
    }
      function checkBackpack() {
        if (playerHealth >= 1) {
        setStoryText(`You check your backpack, inside you have: ${playerBackpack.join(', ')}`)
      } else {
        setStoryText(deathText)
      }
    }
      function roadsideRest() {
        if (playerHealth >= 1) {
          if (playerHealth >= playerMaxHealth) {
            setStoryText('You consider resting, but realize that you aren\'t actually tired. You decide to move on instead. \(Your health is already full, don\'t be silly\).')
            return
          } else {
            const heal = Math.round(Math.random() * (playerMaxHealth - playerHealth))
            const newHealth = Math.min(playerMaxHealth, playerHealth + heal)
            setPlayerHealth(newHealth)
            setStoryText(`You set up a bedroll by the side of the road and rest for a while. You feel refreshed and have ${newHealth} health`)
          }
        } else {
          setStoryText(deathText)
        }
      }
      function humanityCheck() {
        if (playerHealth >= 1) {
          const nextHealth= Math.max(0, playerHealth -1)
          setPlayerHealth(nextHealth)
          if (nextHealth === 0 ) {
            setStoryText('You were human, but now you are dead. Therefore you are now a corpse. Game over.')
          } else {
            setStoryText('You cut yourself and bleed, you are relieved to find that you are still human. A hurting human now, but still human.')
            return
          } 
        }
        else {
          setStoryText(deathText)
        }
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
            <button onClick={humanityCheck}>Check if you're still human</button>
            <button onClick={roadsideRest}>Rest by the road</button>
          </section>
        </main>
      )
    }
    
    export default App