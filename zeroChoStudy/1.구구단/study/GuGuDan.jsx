const React = require('react');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    let [value, setValue] = React.useState('');
    let [result, setResult] = React.useState('');

    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult((preveResult) => {
                return '정답 : ' + value;
            });
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }
    console.log('렌더링');
    return (
        <React.Fragment>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button>클릭</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    );
};

module.exports = GuGuDan;