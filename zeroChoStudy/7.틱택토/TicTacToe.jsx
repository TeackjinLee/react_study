import React, {useState, useReducer} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']];
};

const TicTecToe = () => {
    // useReducer을 사용하여 아래 내용들을 줄여준다.
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Table />
            {winner && <div>{winner}님의 승리</div>}
        </>
    );
}

export default TicTecToe;