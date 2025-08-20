import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputHandler = (e)=>{
        setInput(e.target.value);
    }   

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(input);
        
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={inputHandler} value={input} />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo