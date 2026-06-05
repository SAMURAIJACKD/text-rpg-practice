import './App.css'
    
    function App() {
      const playerName = 'Ricky'
      const playerLevel = 1
      const playerHealth = 20
      const location = 'Old Forest Road'
    
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
              You stand on a quiet road at the edge of an old forest. The trees
              move slightly, even though there is no wind.
            </p>
          </section>
    
          <section>
            <h2>Choices</h2>
            <button>Enter the forest</button>
            <button>Check your backpack</button>
            <button>Rest by the road</button>
          </section>
        </main>
      )
    }
    
    export default App