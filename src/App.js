import React from "react";
import "./App.css";

import TodoList from "./container/TodoList";
import TodoTask from "./container/TodoTask";

function App() {
	return (
		<div className='container'>
			<header>
				<h1>To Do App</h1>
			</header>
			<TodoList />
			<TodoTask />
			</div>
	);
}

export default App;
