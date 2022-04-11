import React from "react";
import todo from "../index";

function  List({updatedTodos,todos,setlist,list}){

    const finished = (e) => {
        const finishValue = todos.find((index)=>index.name === e.target.name);
        finishValue.state =  e.target.checked === true ? "completed" : "view";
        updatedTodos([...todos]);
        setlist([...list])
    };

    function removed(name){
        const newTodos = list.filter((item)=> item.name !== name);
        updatedTodos([...newTodos]);
        setlist([...newTodos])

    };

return (
    <>
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {todos.map((item,index) => (

                    <li className={item.state} key={index}>
                        <div className="view">
                            <input className="toggle" type="checkbox"  checked={item.state == "completed" ? true : false}
                                   onClick={finished} name={item.name}/>
                            <label>{item.name}</label>

                            <button className="destroy" onClick={()=>removed(item.name)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </>
);
}

export default  List;