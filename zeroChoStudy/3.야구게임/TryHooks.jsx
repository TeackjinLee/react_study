import React, {memo, useState} from 'react';

const Try = memo(({tryInfo}) => {
    // 자식에서는 props를 변경하지 않는게 원칙 예) tryInfo = 'test'
    // 불가피하게 자식에서 props를 변경해야 할 경우 props를 state로 만들어 작업
    // const [result, setResult] = useState(tryInfo.result);

    // const onClick = () => {
    //     setResult('1');
    // }

    return (
        <li>
            <div>{tryInfo.try}</div>
            {/* <div onClick={onClick}>{result}</div> */}
            <div>{tryInfo.result}</div>
        </li>
    )
});

Try.displayName = 'Try';

export default Try;