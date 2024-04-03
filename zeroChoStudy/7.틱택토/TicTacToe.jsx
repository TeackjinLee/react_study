import React, {useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            // state.winner = action.winner; 이렇게 하면 안됨.
            return {
                ...state,   // 얕은 복사를 해야한다.
                winner: action.winner,
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
            <Table onClick={onClickTable} tableData={state.tableData}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
}

export default TicTecToe;