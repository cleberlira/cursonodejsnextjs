# INTRODUÇÃO AO DESENVOLVIMENTO WEB COM NODE.JS e Next.JS

## Sobre o curso
```

Objetivos: Abordar as principais funcionalidades do Node.js e como utilizá-las para desenvolver aplicações web modernas. 
Professores: Prof. Dr. Cleber Lira e Prof. Dr. Thiago Mendes
Datas:   28 de abril, 05, 12, 19 de maio de 2023 das 14h às 16h.
Carga horária: 8 horas
Local: Online | Microsoft Teams

```


## Criar a Aplicação Next.JS 

Observar a estrutura de projetos Node.JS e Next.JS. A Aplicação Node.JS executará na porta 3080 e Next.JS na Porta 3000 

```sh
npx create-next-app appclient

```
Esse é o arquivo de serviço (CursoService.js) que chama a API do nó. Este é um arquivo de serviço com duas funções assíncronas que usam a API de busca para fazer as chamadas de API.

```
export async function obterTodosCursos() {

    const response = await fetch('/api/cursos');
    return await response.json();
}

export async function criarCurso(data) {

    const response = await fetch('/api/cursos/inserir/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"nome": data})
      })
    return await response.json();
}


```
Aqui está o componente (App.js) da aplicação que chama o CursoService.js e obtém os dados da API. Depois de obter os dados da API, definimos o estado de acordo e renderizamos os componentes apropriados novamente para passar os dados para a árvore de componentes


```
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Cursos } from './Cursos'
import { DisplayBoard } from './DisplayBoard'
import CriarCurso from './CriarCurso'
import { obterTodosCursos, criarCurso } from '../services/CursoService'

class App extends Component {

  state = {
    nome: {},
    cursos: [],
    numeroCursos: 0
  }

  criarCurso=(e)=> {
    criarCurso(this.state.nome)
        .then(response => {
          console.log(response);
          this.setState({numeroCursos: this.state.numeroCursos + 1})
      });
  }

  obterTodosCursos=()=> {
    obterTodosCursos()
      .then(cursos => {
        console.log(cursos)
        this.setState({cursos: cursos, numeroCursos: cursos.length})
      });
  }

  onChangeForm = (e) => {
      let nome = this.state.nome
      if (e.target.name === 'nome') {
          nome = e.target.value;
   
      }
      this.setState({nome})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CriarCurso 
                  nome={this.state.nome}
                  onChangeForm={this.onChangeForm}
                  criarCurso={this.criarCurso}
                  >
                </CriarCurso>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numeroCursos={this.state.numeroCursos}
                  obterTodosCursos={this.obterTodosCursos}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Cursos cursos={this.state.cursos}></Cursos>
        </div>
      </div>
    );
  }
}

export default App;


```

Instale o módulo http-proxy-middleware

```
npm install http-proxy-middleware --save

```
Instale o módulo bootstrap
```

npm install bootstrap

```
## Uso do nodemon

Reiniciar o servidor quando ocorrer mudança no código

```sh
sudo npm install -g nodemon
```
```
npm install –save-dev nodemon

```

Para rodar com suporte ao nodemon


```
nodemon app.js

```




## Suporte e desenvolvimento

<p align="center">
	Desenvolvido por Cleber Lira e Tiago Mendes </br>
  
</p>
