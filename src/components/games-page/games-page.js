import React from 'react';
import { connect } from 'react-redux';

import GamesList from '../games-list/games-list';
import { fetchGames } from '../../actions/actions'

class GamesPage extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <GamesList games={this.props.games} />
      </div>
    );
  }
}

// GamesPage.propTypes = {
//   games: React.PropTypes.array.isRequired
// }

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);
