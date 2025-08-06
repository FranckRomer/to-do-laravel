import { useState, useEffect } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Hook personalizado para manejar localStorage
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue] as const;
}

// Componente para mostrar el estado del guardado
export default function SaveLocal({ todos }: { todos: Todo[] }) {
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const saveToLocalStorage = () => {
        setIsSaving(true);
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
            setLastSaved(new Date());
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const clearLocalStorage = () => {
        try {
            localStorage.removeItem('todos');
            setLastSaved(null);
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    };

    return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
                💾 Guardado Local
            </h3>
            
            <div className="flex gap-2 mb-3">
                <button
                    onClick={saveToLocalStorage}
                    disabled={isSaving}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    {isSaving ? 'Guardando...' : 'Guardar Tareas'}
                </button>
                
                <button
                    onClick={clearLocalStorage}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                >
                    Limpiar Datos
                </button>
            </div>

            {lastSaved && (
                <p className="text-sm text-blue-600">
                    ✅ Último guardado: {lastSaved.toLocaleString('es-ES')}
                </p>
            )}

            <p className="text-xs text-blue-600 mt-2">
                Las tareas se guardan automáticamente en tu navegador
            </p>
        </div>
    );
}