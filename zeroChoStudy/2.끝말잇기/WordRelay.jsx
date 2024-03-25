const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef();

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(word[word.length -1]);
        if(word[word.length -1] === value[0]) {
            setValue('');
            setWord(value);
            setResult('딩동댕');
            inputRef.current.focus();
        } else {
            setResult('땡!!!');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input ref={inputRef} className='wordInput' value={value} onChange={onChangeInput}/>
                <button>입력!</button>
                <div>{result}</div>
            </form>
        </>
    )
}

module.exports = WordRelay;
