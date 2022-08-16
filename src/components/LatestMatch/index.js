// Write your code here

import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-section">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="venue-logo-container">
            <div className="team-name-venue-details-container">
              <h1 className="latest-team-name">{competingTeam}</h1>
              <p className="latest-match-details-styling">{date}</p>
              <p className="latest-match-details-styling">{venue}</p>
              <p className="latest-match-details-styling">{result}</p>
            </div>
            <img
              className="latest-team-logo"
              src={competingTeamLogo}
              alt={competingTeam}
            />
          </div>

          <div className="inning-mom-umpire-display-right-container">
            <div className="innings-container">
              <p className="inning-text-style">First Innings</p>
              <p className="inning-text-value-style">{firstInnings}</p>
            </div>

            <div className="innings-container">
              <p className="inning-text-style">Second Innings</p>
              <p className="inning-text-value-style">{secondInnings}</p>
            </div>

            <div className="innings-container">
              <p className="man-of-the-match-style">Man Of The Match</p>
              <p className="inning-text-value-style">{manOfTheMatch}</p>
            </div>

            <div className="innings-container">
              <p className="inning-text-style">Umpires</p>
              <p className="inning-text-value-style">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
