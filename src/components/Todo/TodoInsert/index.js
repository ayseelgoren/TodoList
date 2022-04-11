import React, { useState} from 'react';
const defaultValue = {name:"",state:"view"};
function TodoInsert({addTodos,todos,setlist,list}) {
    const [todo,setTodo] = useState(defaultValue);
   const handleSubmit = (event) =>{
       event.preventDefault();
       addTodos([...todos,todo]);
       setlist([...list,todo]);
       setTodo(defaultValue);
   }
   const onChangeInput = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
   };
return (
      <>
          <header className="header">
              <h1>todos</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={todo.name} name="name" onChange={onChangeInput}
                  className="new-todo" placeholder="What needs to be done?" autoFocus/>
              </form>
          </header>
      </>
);
}
export default TodoInsert;