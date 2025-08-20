import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"


const Todos = () => {
    const todos = useSelector(state => state.todos); 
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map(e => <li key={e.id}>
                {e.text}
                <button onClick={() => dispatch(removeTodo(e.id))}>X</button>
            </li>)}
        </ul>
    )
}

export default Todos