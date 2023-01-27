import { useState } from 'react';
import styles from './EmptyList.module.css';
import { Note, Trash } from 'phosphor-react'


export function EmptyList() {

    return (
        <div className={styles.list}>
            <main className={styles.content}>
                <Note size={50} />
                <strong>Você ainda não tem tarefas cadastradas.</strong>
                <p>Crie e organize seus itens a fazer!</p>
            </main>
        </div>
        
    );
}