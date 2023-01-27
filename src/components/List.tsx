import { useState } from 'react';
import styles from './List.module.css';
import { Trash } from 'phosphor-react'

interface TaskContent {
    id: string;
    status:boolean;
    msg:string;
}

interface ListProps {
    taskUpdate:(task:TaskContent) => void;
    task: TaskContent;
    onDeleteTask:(task:TaskContent) => void;
}

export function List({taskUpdate, task, onDeleteTask}:ListProps) {

    function handleTaskUpdate() {
        taskUpdate(task);
    }

    function handleDeleteTask() {
        onDeleteTask(task);
    }

    return (
        <div className={styles.list}>
                { Object.keys(task).length > 0 }
                <div className={styles.content}>
                    <input id={task.id} className={styles.checkbox} key={task.id} onClick={handleTaskUpdate} checked={task.status} type="radio" />
                    {task.msg}
                    <a onClick={handleDeleteTask}>
                        <Trash size={15}/>
                    </a>
                </div>
        </div>
        
    );
}