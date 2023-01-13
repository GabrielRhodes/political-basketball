import politicsData from '../../data/politics'
import { useState } from 'react'
import './graph.scss'

function Graph({ x, y, p, aN, title, id }) {
  const [branch, setBranch] = useState(3)
  const branchName = ['Senate', 'House', 'Presidency']
  let previous

  function findColor(year) {
    return politicsData.split(/\r\n|\n/)[year - 1947].split(',')[branch] === 'D'
      ? '#5353ff'
      : '#ff6a6a'
  }

  function averageResult(party) {
    let years = politicsData
      .split(/\r\n|\n/)
      .filter((v) => {
        let s = v.split(',')
        return s[branch] === party && parseInt(s[0]) > x[0]
      })
      .map((v) => parseInt(v.split(',')[0]))
    let a =
      p
        .filter((v) => years.includes(v[0]))
        .map((v) => v[1])
        .reduce((b, c) => b + c) / years.length
    return a
  }

  function display(v) {
    return `<p>Year: ${v[0]}</p><p>${title}: ${v[1].toFixed(aN)}</p>`
  }

  let d = averageResult('D')
  let r = averageResult('R')

  return (
    <div className='graph-display'>
      <h1>{title}</h1>
      <div className='graph'>
        <div className='y-axis'>
          <p className='y-4'>{y[1].toFixed(aN)}</p>
          <p className='y-3'>{((y[1] * 3 + y[0]) / 4).toFixed(aN)}</p>
          <p className='y-2'>{((y[1] + y[0]) / 2).toFixed(aN)}</p>
          <p className='y-1'>{((y[1] + y[0] * 3) / 4).toFixed(aN)}</p>
          <p className='y-0'>{y[0].toFixed(aN)}</p>
        </div>
        <div id={`data-display-${id}`} className='data-display'></div>
        <svg width={740} height={450}>
          <line x1={10} x2={730} y1={10} y2={10} stroke='#777'></line>
          <line x1={10} x2={730} y1={118} y2={118} stroke='#777'></line>
          <line x1={10} x2={730} y1={225} y2={225} stroke='#777'></line>
          <line x1={10} x2={730} y1={332} y2={332} stroke='#777'></line>
          <line x1={10} x2={730} y1={440} y2={440} stroke='#777'></line>
          <line x1={730} x2={730} y1={10} y2={440} stroke='#777'></line>
          <line x1={10} x2={10} y1={10} y2={440} stroke='#777'></line>

          {p.map((v) => {
            let c = findColor(parseInt(v[0]))
            let cx = (720 * (v[0] - x[0])) / (x[1] - x[0]) + 10
            let cy = 430 - (430 * (v[1] - y[0])) / (y[1] - y[0]) + 10
            let elem = (
              <>
                {previous ? (
                  <line
                    x1={previous[0]}
                    y1={previous[1]}
                    x2={cx}
                    y2={cy}
                    stroke={previous[2]}
                  />
                ) : (
                  <></>
                )}
                <circle r='5' cx={cx} cy={cy} fill={c} />
                <line
                  x1={cx}
                  x2={cx}
                  y1={10}
                  y2={440}
                  stroke={v[0] % 5 === 0 ? '#777' : 'rgba(80, 80, 80, 0.6)'}
                ></line>
                <rect
                  onMouseEnter={() => {
                    console.log('yo')
                    let elem = document.getElementById(`data-display-${id}`)
                    elem.innerHTML = display(v)
                    elem.style.top = `${cy}px`
                    elem.style.left = `${cx}px`
                    elem.style.opacity = 0.95
                  }}
                  onMouseLeave={() => {
                    let elem = document.getElementById(`data-display-${id}`)
                    elem.innerHTML = display(v)
                    elem.style.opacity = 0
                  }}
                  x={cx}
                  width={720 / (x[1] - x[0])}
                  height={430}
                  y='10px'
                  fill='transparent'
                ></rect>
              </>
            )
            previous = [cx, cy, c]

            return elem
          })}
        </svg>
        <div className='x-axis'>
          <p className='x-0'>{x[0]}</p>
          <p className='x-1'>{x[1]}</p>
        </div>
      </div>
      <section className='branch-control'>
        <button
          className={branch === 1 ? 'selected' : ''}
          onClick={() => {
            setBranch(1)
          }}
        >
          Senate
        </button>
        <button
          className={branch === 2 ? 'selected' : ''}
          onClick={() => {
            setBranch(2)
          }}
        >
          House
        </button>
        <button
          className={branch === 3 ? 'selected' : ''}
          onClick={() => {
            setBranch(3)
          }}
        >
          President
        </button>
      </section>
      <div className='graph-summary'>
        <h2>When...</h2>
        <div>
          <h3>Democrats Control The {branchName[branch - 1]}</h3>
          <p>
            {title}: {d.toFixed(2)}
          </p>
        </div>
        <div>
          <h3>Republicans Control The {branchName[branch - 1]}</h3>
          <p>
            {title}: {r.toFixed(2)}
          </p>
        </div>
        <h4>
          You should vote{' '}
          {d > r ? 'Democrat' : d === r ? 'Random Candidate' : 'Republican'} for
          the {branchName[branch - 1]}
        </h4>
      </div>
    </div>
  )
}

export default Graph
