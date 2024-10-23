"use client";

// hooks useState e useEffect do React (como aula passada)
import { useState } from 'react';

// componente Tarefa de './components/Tarefa'
import Tarefa from './components/Tarefa';

// página principal da aplicação
export default function Home() {  
  // 'tarefas' como um vetor de objetos, cada um representando uma tarefa.
  // tarefa tem id (número), nome (texto) e um status (booleano)
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Fazer Compras', concluida: false },
    { id: 2, nome: 'Estudar Next.js', concluida: true },
  ]);  

  // 'novaTarefa' como uma string vazia, que será usada para armazenar o nome da nova tarefa a ser adicionada.
  const [novaTarefa, setNovaTarefa] = useState('');  

  // adiciona uma nova tarefa à lista de tarefas.
  const adicionarTarefa = () => {    
    // testa se o nome da nova tarefa não está vazio (remove os espaços em branco para fazer o teste).
    if (novaTarefa.trim() !== '') {      
      // se passou no teste, adiciona gerando um novo ID e definindo 'concluida' como false.
      setTarefas([        
        ...tarefas, // mantem as tarefas antigas
        { id: tarefas.length + 1, nome: novaTarefa, concluida: false }, // adiciona a nova tarefa
      ]);      
      // limpa o campo de texto
      setNovaTarefa('');    
    }  
  };  

  // função marcar como concluida.
  const concluirTarefa = (id: number) => {    
    // método map para percorrer o array de tarefas e atualizar o status 'concluida' da tarefa com o ID correspondente.
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));  
  };

  // função excluir uma tarefa.
  const excluirTarefa = (id: number) => {    
    // método filter para remover a tarefa com o ID correspondente do array
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));  
  };  

  // JSX que será renderizado na página.
  return (
    <div>
      <h1>Minhas Tarefas DSM 3</h1> {/* título */}
      {/* formulário para adicionar novas tarefas */}
      <form onSubmit={(e) => { e.preventDefault(); adicionarTarefa(); }}>
        {/* Impede o comportamento padrão de submit do formulário e chama a função adicionarTarefa */}
        <input
          type="text" // campo de entrada de texto
          value={novaTarefa} // valor é controlado pelo estado 'novaTarefa'
          onChange={(e) => setNovaTarefa(e.target.value)} // atualiza o estado 'novaTarefa' quando o valor do campo muda
        />
        <button type="submit">Adicionar</button> {/* botão para adicionar */}
      </form>
      <ul> {/* lista para exibir as tarefas */}
        {tarefas.map(tarefa => ( // Itera sobre o array de tarefas
          <Tarefa
            key={tarefa.id} // chave para cada item (importante para o React)
            tarefa={tarefa} // tarefa como prop para o componente Tarefa
            onConcluir={concluirTarefa} // função concluirTarefa como prop
            onExcluir={excluirTarefa} // função excluirTarefa como prop
          />
        ))}
      </ul>
    </div>
  );
}
