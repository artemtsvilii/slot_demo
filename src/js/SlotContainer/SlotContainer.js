/**
 * Created by Artem on 04.09.2018.
 */

import React from 'react';
import {
    initializeSlotConfig,
    initializeSlotState,
    spinSlot,
    resetSlot
} from '../utils/slot-api';
import Slot from '../Slot/Slot';

class SlotContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            config: {},
            balance: 0,
            totalBet: 0,
            totalWin: 0,
            symbols: [],
            loading: true
        };
        this.setSlotState = this.setSlotState.bind(this);
        this.spin = this.spin.bind(this);
        this.reset = this.reset.bind(this);
    }

    setSlotState({ balance, totalBet, totalWin, symbols }) {
        this.setState({
            balance,
            totalBet,
            totalWin,
            symbols
        });
    }

    componentDidMount() {
        initializeSlotConfig().then((slotConfig) => {
            this.setState({
                config: slotConfig,
                loading: false
            });
        });
        initializeSlotState().then(this.setSlotState);
    }

    spin() {
        spinSlot(100, 3).then(this.setSlotState);
    }

    reset() {
        resetSlot().then(this.setSlotState);
    }

    render() {
        return (
            <div>
                <div>Balance: ${this.state.balance}</div>
                <div>Total win: ${this.state.totalWin}</div>
                <div>Total bet: ${this.state.totalBet}</div>
                {
                    !this.state.loading ? <Slot symbols={this.state.symbols}/> : <div>Loading</div>
                }
                <button onClick={this.spin}>Spin</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default SlotContainer;
