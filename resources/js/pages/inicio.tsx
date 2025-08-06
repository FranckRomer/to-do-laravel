import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useLocalStorage } from "../components/save/SaveLocal";
import SaveLocal from "../components/save/SaveLocal";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function Inicio() {
    const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: newTodo.trim(),
                    completed: false,
                },
            ]);
            setNewTodo("");
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <Head title="Todo List" />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        📝 Todo List
                    </h1>

                    {/* Componente de guardado local */}
                    <SaveLocal todos={todos} />

                    {/* Formulario para agregar tareas */}
                    <form onSubmit={addTodo} className="mb-6">
                        <div className="flex gap-2 text-gray-800">
                            <input
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder="¿Qué necesitas hacer?"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>

                    {/* Lista de tareas */}
                    <div className="space-y-3">
                        {todos.length === 0 ? (
                            <p className="text-center text-gray-500 py-8">
                                No hay tareas pendientes. ¡Agrega una nueva tarea!
                            </p>
                        ) : (
                            todos.map((todo) => (
                                <div
                                    key={todo.id}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                        className="w-5 h-5 text-blue-900 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className={`flex-1 ${
                                            todo.completed
                                                ? "line-through text-gray-900"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {todo.text}
                                    </span>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="text-red-500 hover:text-red-700 focus:outline-none"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Estadísticas */}
                    {todos.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-center">
                                {todos.filter((todo) => !todo.completed).length} de{" "}
                                {todos.length} tareas pendientes
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}