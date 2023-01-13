import { Graph } from '../../components'
import nbaData from '../../data/bball'

function Data({ teamLines }) {
  const lines = nbaData.split(/\r\n|\n/).slice(teamLines[0], teamLines[1])

  const winP = lines.map((v) => {
    let a = v.split(',')
    return [
      parseInt(a[0].split('-')[0]) + 1,
      parseInt(a[3]) / (parseInt(a[3]) + parseInt(a[4])),
    ]
  })

  const srs = lines.map((v) => {
    let a = v.split(',')
    return [parseInt(a[0].split('-')[0]) + 1, parseFloat(a[6])]
  })

  return (
    <div id='datasets'>
      <Graph
        x={[2022 - lines.length + 1, 2022]}
        y={[0, 1]}
        p={winP}
        l={true}
        b={1}
        aN={2}
        title='Win %'
        id={0}
      />
      <Graph
        x={[2022 - lines.length + 1, 2022]}
        y={[-15, 15]}
        p={srs}
        l={true}
        b={1}
        aN={1}
        title='SRS'
        id={1}
      />
    </div>
  )
}

export default Data
