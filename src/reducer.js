import {List, Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', Map({
      entry: entry,
      id: state.getIn(['vote', 'id'])
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted');
  const currentId = state.getIn(['vote', 'id']);
  if (hasVoted && currentId !== hasVoted.get('id')) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}


export default function(state = Map(), action) {
    switch(action.type) {
        case 'SET_STATE': 
            return resetVote(setState(state, action.state));
        case 'VOTE':
            return vote(state, action.entry);
    }

    return state;
}