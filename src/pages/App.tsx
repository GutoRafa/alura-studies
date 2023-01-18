import React, {useState} from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista/intex';
import style from './app.module.scss';
import Cronometro from '../components/cronometro';
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
