/// <reference path="../../typings/index.d.ts" />

import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
    getPair: function () {
        return this.props.pair || [];
    },
    isDisabled: function () {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function (entry) {
        return this.props.hasVoted === entry;
    },
    render: function () {
        return <div>
            {
                this.props.winner ?
                    <Winner ref="winner" winner={this.props.winner} /> :
                    <Vote {...this.props} />
            }
        </div>;
    }
})

