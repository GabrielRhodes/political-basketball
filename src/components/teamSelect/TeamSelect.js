import './teamSelect.scss'
import teams from '../../data/teams'

function TeamSelect({ setters }) {
  const teamsElem = teams.map((v, i) => {
    return (
      <button
        className='invisible-button'
        onClick={(e) => {
          setters[0](i)
          setters[1](false)
        }}
      >
        <img alt={v} src={`./nba/${v}.png`} />
      </button>
    )
  })

  return (
    <>
      <div id='overlay'></div>
      <h1 id='select-text'>Select A Team:</h1>
      <div id='team-select'>{teamsElem}</div>
    </>
  )
}

export default TeamSelect
