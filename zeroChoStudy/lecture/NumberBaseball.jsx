import React, {Component} from 'react';
import Try from './try';

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        // answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        {fruit:'사과', taste: '맛있다'},
        {fruit:'감', taste: '떫다'},
        {fruit:'귤', taste: '시다'}
    ]

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmit}>
                    <input mathLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export const hello = 'hello'; // import {hello};

export default NumberBaseball; // import NumberBaseball;