/**
 * Created by Artem on 04.09.2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Reel from '../Reel/Reel';
import styles from './styles.scss';

class Slot extends React.Component {
    renderReels(symbol) {
        return (
            <Reel reelSymbols={symbol} />
        );
    }

    render() {
        const symbols = this.props.symbols;
        return (
            <div className={styles['slot-machine']}>
                {symbols.map((symbol) => {
                    return this.renderReels(symbol);
                })}
            </div>
        );
    }
}

Slot.propTypes = {
    symbols: PropTypes.instanceOf(Array)
};

export default Slot;
