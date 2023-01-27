import styles from './NewTask.module.css';

interface NewTask {
    id:string;
    status:boolean;
    msg:string;
}

interface NewTaskProps {
    onNewTask:(newTask:NewTask) =>void;
    newTask:NewTask;
    newTaskChange:(newTask:string) =>void;
}

export function NewTask({onNewTask, newTask, newTaskChange}:NewTaskProps) {

    function handleNewTask() {
        onNewTask(newTask)
    }

    function handleNewTaskChange(){
        newTaskChange(event?.target.value)
    }

    return (
        <main className={styles.newTask}>
            <form onSubmit={handleNewTask} onChange={handleNewTaskChange}>
            <input type="text"  value={newTask.msg} />
            <button type="submit">Criar </button>
            </form>
        </main>
    )
}