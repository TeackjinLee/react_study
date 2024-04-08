import React, {useCallback, useContext} from 'react';
import { CODE, TableContext, OPEN_CELL, CLICK_MINE, FLAG_CELL } from './MineSearch';

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
            return {
                background: 'white',
            }
        case QUESTION_MINE:
        case QUESTION:
            return {
                background: 'yellow',
            }
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return {
                background: 'red',
            }
        default: 
            return {
                background: 'white',
            };
    }
}

const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.CLICKED_MINE:
            return '펑';
        case CODE.FLAG:
            return '!';
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return '?';
        default:
            return '';
    }
}


const Td = ({rowIndex, cellIndex}) => {
    const {tableData, dispatch} = useContext(TableContext);

    const onClick = useCallback(() => {
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
            case CODE.FLAG_MINE:
            case CODE.FLAG:
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                return;
            case CODE.NORMAL:
                dispatch({type:OPEN_CELL, row: rowIndex, cell: cellIndex});
            case CODE.MINE:
                dispatch({type:CLICK_MINE, row: rowIndex, cell: cellIndex}); 
            default:
                return;
        }
        
    },[tableData[rowIndex][cellIndex]]);

    const onRightClickTd = useCallback((e) => {
        e.preventDefault();
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({type: FLAG_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.FLAG_MINE:
            case CODE.FLAG:
                dispatch({type: QUESTION_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                dispatch({type:NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex]]);

    return (
        <td
            style={getTdStyle(tableData[rowIndex][cellIndex])}
            onClick={onClick}
            onContextMenu={onRightClickTd}
        >{getTdText(tableData[rowIndex][cellIndex])}</td>
    )
};

export default Td;