import { useState } from 'react'
import './App.scss'
import { Data, Home } from './screens'
import { Nav, TeamSelect } from './components'

function App() {
  const lines = [
    [0, 76],
    [76, 131],
    [131, 207],
    [207, 280],
    [280, 307],
    [307, 363],
    [363, 415],
    [415, 489],
    [489, 544],
    [544, 598],
    [598, 671],
    [671, 703],
    [703, 737],
    [737, 770],
    [770, 831],
    [831, 907],
    [907, 959],
    [959, 1033],
    [1033, 1087],
    [1087, 1161],
    [1161, 1216],
    [1216, 1249],
    [1249, 1304],
    [1304, 1356],
    [1356, 1404],
    [1404, 1446],
    [1446, 1501],
    [1501, 1528],
    [1528, 1548],
    [1548, 1603],
  ]
  const [popup, setPopup] = useState(false)
  const [team, setTeam] = useState()
  return (
    <div>
      {team > -1 ? (
        <Data teamLines={lines[team]} />
      ) : (
        <>
          <Home setter={setTeam} />{' '}
          <div className='flex-wrap'>
            <button onClick={() => setPopup(true)}>Click to Select Team</button>
          </div>
        </>
      )}
      {popup ? (
        <TeamSelect setters={[setTeam, setPopup]} />
      ) : team > -1 ? (
        <Nav team={team} setter={setPopup} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
