import React, { useState} from "react";
import TodoInsert from './TodoInsert'
import List from './List'
import Filter from './Filter'
function Todo(){
    const [todos,setTodos] = useState([]);
    const [list,setList] = useState([]);

    return(
        <section className="todoapp">
            <TodoInsert addTodos={setTodos} todos={todos} setlist={setList} list={list}/>
            <List updatedTodos={setTodos} todos={todos} setlist={setList} list={list} />
            <Filter filteredTodos={setTodos} todos={todos} setlist={setList} list={list} />

        </section>
    );
}

export default Todo;