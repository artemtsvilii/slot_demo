/**
 * Created by Artem on 04.09.2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Reel extends React.Component {
    render() {
        const reelSymbols = this.props.reelSymbols;
        return (
            <div>
                {reelSymbols.map((symbol) => {
                    return <div>{symbol}</div>;
                })}
            </div>
        );
    }
}

Reel.propTypes = {
    reelSymbols: PropTypes.instanceOf(Array)
};

export default Reel;
