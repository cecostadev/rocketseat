import { useState } from 'react'
import { Header } from './components/Header';
import './assets/global.css'
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { List } from './components/List';
import { EmptyList } from './components/EmptyList';


export function App() {

const [tasks, setTasks] = useState([
    { 
      'id' :'1',
      'msg': 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      'status': false
    },
    { 
      'id' :'2',
      'msg': 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      'status': true,
      
    },
    { 
      'id' :'3',
      'msg': 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      'status': true
    }
    

]);

const [newTask, setNewTask] = useState('');

const [activeTasks, setAcitveTask] = useState();


function onNewTask() {
  event.preventDefault();
  setTasks([...tasks, {
    'id': '4',
    'status':false,
    'msg': newTask
  }]);
  setNewTask('');
  setAcitveTask(tasks);
}

function newTaskChange(ev) {
  setNewTask(ev);
}

function taskUpdate(ev) {
  const newTaskItens = tasks.map(task => {

      if(task.id == ev.id) {
        const item = { ...task, status: !task.status }
        return item;
      }

      return task;
  });

  setTasks(newTaskItens);
}

function deleteTask(taskToDelete) {
  const taskWithoutDeleted = tasks.filter(task => {
    return task != taskToDelete;
  });

  setTasks(taskWithoutDeleted);
}

  return (
    
    <div>
      <Header/>
      <NewTask  newTaskChange={newTaskChange} onNewTask={onNewTask} newTask={newTask}/>
      <Task tasks={tasks} />

      <div>
          { 
            Object.keys(tasks).length > 0 ? (
            tasks.map( task => {
                  return <List 
                          taskUpdate={taskUpdate} 
                          task={task} 
                          onDeleteTask={deleteTask}
                          />
            }
            )):(
                 <EmptyList/>
            )
          }
      </div>
    </div>
  )
}
