import teams from '../../data/teams'
import './nav.scss'

function Nav({ setter, team }) {
  return (
    <>
      <nav>
        <button
          onClick={() => {
            setter(true)
          }}
        >
          <p>Change Team</p>
        </button>
      </nav>
      <aside>
        <img
          src={`./nba/${teams[team]}.png`}
          alt={teams[team]}
          onClick={() => {
            setter(true)
          }}
        />
      </aside>
    </>
  )
}

export default Nav
