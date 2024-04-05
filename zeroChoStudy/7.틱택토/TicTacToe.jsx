import React, {useReducer, useCallback, useEffect} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
    ],
    recentCell:[-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

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
                recentCell: [action.row, action.cell],
            };
        case CHANGE_TURN :
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        case RESET_GAME: {
            return {
                ...state,
                turn: 'O',
                tableData: [
                    ['', '', ''], 
                    ['', '', ''], 
                    ['', '', '']
                ],
                recentCell:[-1, -1],
            };
        }
        default:
            return state;
    }
};

const TicTecToe = () => {
    // useReducer을 사용하여 아래 내용들을 줄여준다.
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;
    // 비동기state에 따라서 뭔가를 처리할때는 useEffect를 사용한다.
    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0) {
            return;
        };
        let win = false;
        
        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }

        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }

        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }

        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        if (win) {
            dispatch({type: SET_WINNER, winner: turn});
            dispatch({type:RESET_GAME});
        } else {
            let all = true; // 칸이 다 차있음
            
            tableData.forEach((row) => {    // 무승부 검사
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                });
            });
            if (all) {
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TURN });
            }
        }
        
    },[recentCell]);


    const onClickTable = useCallback(() => {
        // dispatch(action);
        dispatch({type: SET_WINNER, winner: 'O'});
    },[]);

    
    return (
        <>
            <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
            {winner && <div>{winner}님의 승리</div>}
        </>
    );
}

export default TicTecToe;