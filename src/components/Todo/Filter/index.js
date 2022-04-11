import React from "react";

function  Filter({filteredTodos,todos,setlist,list}){
    function allTodos(){
        filteredTodos([...list])
    }
    function activeTodos(){
        const newTodos = list.filter((item)=> item.state !== "completed");
        filteredTodos([...newTodos]);
    }
    function completedTodos(){
        const newTodos = list.filter((item)=> item.state !== "view");
        filteredTodos([...newTodos]);
    }
     const clearCompletedTodos = ()=> {
         const newTodos = list.filter((item)=> item.state !== "completed");
         filteredTodos([...newTodos]);
         setlist([...newTodos])
     }
    return(
        <>
            <footer className="footer">
              <span className="todo-count">
			<strong>{todos.length} </strong>
			items left
		</span>

                <ul className="filters">
                    <li>
                        <a className="selected" onClick={()=>allTodos()}>All</a>
                    </li>
                    <li>
                        <a  onClick={()=>activeTodos()}>Active</a>
                    </li>
                    <li>
                        <a onClick={()=>completedTodos()} >Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearCompletedTodos}>
                    Clear completed
                </button>
            </footer>
        </>
    );
}
export default Filter;