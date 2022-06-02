import React,{ useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people,setPeople] = useState(data)
  return ( 
    <main>
    <section className='container'>
      <h3>{people.length} birtday today</h3>
      <List people = {people} />
      <button onClick={() => console.log('Clicked!')}>Clicked!</button>
    </section>
  </main>
  );
}

export default App
