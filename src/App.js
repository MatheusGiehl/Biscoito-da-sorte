import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {};

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito() {
    console.log("quebrou");
  }

  render() {
    return (
    <div className="container">
      <img 
         className="imagem"
         src={require('./assets/biscoito.png')}
         alt='biscoito'
      />
      <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
      <h3 className="textoFrase">Frase aleatória... </h3>
    </div>
    );
  }
}

class Botao extends Component {
  render () {
    return (
      <div>
        <button
         onCLick={this.props.acaoBtn} 
         className="botao btn"
         >
          {this.props.nome}
          </button>
      </div>
    )
  }
}

export default App;
