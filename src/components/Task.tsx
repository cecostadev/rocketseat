import styles from './Task.module.css';

interface TaskContent {
    id: string;
    status:boolean;
    msg:string;
}

interface TaskProps {
    tasks:TaskContent;
    activeTasks:TaskContent;
}

export function Task({tasks, activeTasks}:TaskProps) {

    function tasksActives() {

        const response = tasks.filter(function(task){
          return task.status === true;
        })
      
        return response;
      
    }

    const actives = tasksActives();

    return (
        <div className={styles.task}>
            <div className={styles.taskHeader}>
                <span>Tarefas Criadas <span className={styles.counter}>{tasks.length}</span> </span>
                <span>Concluídas <span className={styles.counter}>{actives.length} de {tasks.length}</span> </span>
            </div>
        </div>
    );
}