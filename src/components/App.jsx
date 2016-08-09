/// <reference path="../../typings/index.d.ts" />

import React from 'react';
import {List, Map} from 'immutable';


const tally = Map({'Trainspotting': 5, '28 Days Later': 4});
const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
        pair: pair,
        tally: tally
    });
  }
});