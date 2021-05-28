import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './styles.scss';

function About() {
  return (
    <div>
      <header>
        <Link to='/'>Voltar para a Home</Link>
      </header>
      <main id="about">
        <h1>Sobre</h1>
        <h2>A proposta</h2>
        <p>
          Intervalos são feitos durante as aulas na <a href="https://github.com/betrybe" target="_blank" rel="noreferrer">
          @betrybe</a>, com isso, os
          professores e professoras recorrem a seus próprios métodos para a marcação do
          tempo. O professor <a href="https://github.com/icaroharry" target="_blank" rel="noreferrer">
          @icaroharry</a>, de front-end, propôs um desafio de
          desenvolver um temporizador (countdown), que poderia ser interessante
          para prática do conteúdo e dos conceitos aprendidos, e também útil como
          ferramenta para as aulas.
        </p>
        <h2>O projeto</h2>
        <p>
          Diversas opções são oferecidas para o countdown. A pessoa usuária pode inserir
          um tempo customizado, no formato &quot;3m 25s&quot;, e iniciar a contagem logo em
          seguida. Esse tempo não é armazenado.
        </p>
        <p>
          Também é possível utilizar predefinições (presets) para guardar tempos comuns.
          Em um dia mais corrido, por exemplo, o preset &quot;Vamos rápido, voltamos já&quot;
          pode ser útil para marcar um tempo mais curto de intervalo. Já em um dia comum, o
          preset &quot;Voltamos em breve&quot; entrega um tempo regular de intervalo. Em dias
          mais tranquilos, &quot;Só alegria&quot; pode deixar todos e todas felizes com um
          intervalo mais longo.<br />
          Todos os presets são salvos apenas em Local Storage, nenhuma informação é enviada
          para qualquer servidor.
        </p>
        <h2>O desenvolvedor</h2>
        <p className="aboutTheCreator">
          <img src="https://github.com/nascjoao.png" alt="João sorrindo" id="imgAboutCreator" />
          <span>
            Oi, tudo bem? 😊️
            Eu sou o João Nasc (
            <a href="https://github.com/nascjoao" target="_blank" rel="noreferrer">
              @nascjoao
            </a>
            ), brasileiro e desenvolvedor.<br />
            Sou apaixonado por tecnologia e estudo cada dia mais para expandir meus
            conhecimentos.<br />
            Mais sobre mim:&nbsp;
            <a href="https://github.com/nascjoao" target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href="https://linkedin.com/in/nascjoao" target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
          </span>
        </p>
      </main>
    </div>
  );
}

export default About;
