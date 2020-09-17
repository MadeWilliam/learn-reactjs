import React, { Component } from 'react';
import Coin from '../coin/Coin';
import { choice } from '../../helper';
import './CoinContainer.css';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "/img/heads.jpg" },
            { side: "tails", imgSrc: "/img/tails.jpg" }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }

    flip = _ => {
        let newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
            }
        })
    }

    handleClick = e => {
        this.flip();
    }

    render() {
        return (
            <div className="CoinContainer" >
                <h1>Coin Flipper</h1>
                {this.state.currCoin && <Coin data={this.state.currCoin} />}
                <button className="CoinContainer-button__flip" onClick={this.handleClick}>Flip Me!</button>
                <p className="CoinContainer-text">
                    Out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
                </p>
            </div>
        );
    }
}

export default CoinContainer;