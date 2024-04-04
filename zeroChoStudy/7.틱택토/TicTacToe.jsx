import React, {useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
    ],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            // state.winner = action.winner; 이렇게 하면 안됨.
            return {
                ...state,   // 얕은 복사를 해야한다.
                winner: action.winner,
            }
        case CLICK_CELL :
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
            };
        case CHANGE_TURN :
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
    }
};

const TicTecToe = () => {
    // useReducer을 사용하여 아래 내용들을 줄여준다.
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const [state, dispatch] = useReducer(reducer, initialState);

    const onClickTable = useCallback(() => {
        // dispatch(action);
        dispatch({type: SET_WINNER, winner: 'O'});
    },[]);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
}

export default TicTecToe;