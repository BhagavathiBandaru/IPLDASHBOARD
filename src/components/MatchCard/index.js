import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li className={`match-card-container ${matchStatus}`}>
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={competingTeamLogo}
        />
        <h1 className="team-name">{competingTeam}</h1>
        <p className="description">{result}</p>
        <p className="status-text">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard

/**
 *  When the HTTP GET request made in Team Matches Route is successful,
 *  then the page should consist of HTML image elements with alt as
 *  "competing team {competing_team}" and
 * src value equal to the "competing_team_logo" in recent matches received in response
 */
