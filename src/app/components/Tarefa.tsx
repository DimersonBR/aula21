"use client";

// interface TypeScript chamada TarefaProps - descreve as propriedades(props) que o componente espera receber
interface TarefaProps {
  tarefa: { //define as propriedades:
    id: number; // ID da tarefa (número)
    nome: string; // nome da tarefa (em texto)
    concluida: boolean; // controle da tarefa concluida (verdadeiro ou falso)
  };
  onConcluir: (id: number) => void; // função  chamada quando o checkbox for clicado (recebe o ID da tarefa)
  onExcluir: (id: number) => void; // função chamada quando o botão "Excluir" for clicado
}

//  componente funcional chamado Tarefa
export default function Tarefa({ tarefa, onConcluir, onExcluir }: TarefaProps) {
  // componente recebe as props (propriedas) 'tarefa', 'onConcluir' e 'onExcluir' de acordo com a interface TarefaProps

  return ( // retorna o JSX que será renderizado na página
    <li> {/*renderia uma lista */}
      <input
        type="checkbox" //checkbox para marcar a tarefa concluida
        checked={tarefa.concluida} // se estiver marcado, esta  concluída
        onChange={() => onConcluir(tarefa.id)} // chama a função 'onConcluir' e passa o ID da tarefa no caso de mudança do checkbox
      />
      <span className={tarefa.concluida ? 'concluida' : ''}> 
        {/* exibe nome da tarefa */}
        {/* modifica a classe para efeito de CSS */}
        {tarefa.nome} 
      </span>
      <button onClick={() => onExcluir(tarefa.id)}>Excluir</button> {/* botão para excluir a tarefa */}
    </li>
  );
}