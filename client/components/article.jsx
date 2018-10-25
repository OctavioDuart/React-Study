import React from 'react' ; 
import { gray } from 'ansi-colors';


export default class Article1 extends React.Component{
    render() {
        return(
            <div style={{textAlign: 'center'}}>
               <h3 style={{textAlign: 'center'}} >O ReactJS</h3>
               <p style={{color : gray}} >
                   O ReactJS é uma biblioteca voltada para o Client-Side que tem como finalidade
                   desenvolver interfaces visuais. Sendo assim no famoso padrão MVC o ReactJS representa
                   o V , ou seja ,  a camada de vizualização . 
                   <br />
                   -Como foi dito o React é uma biblioteca e não um framework
                   -Sua finalidade são interfaces
                   <br />
                   Essas duas informações juntas criam a primeira grande confusão para quem está começando: 
                   se o React é apenas uma biblioteca e só serve para criar UI, como posso criar aplicações completas
                   com ele?
                   E para resolver essa questão precisamos entender que quando a comunidade se refere ao React,
                   o que na verdade ela está querendo dizer é o React e o seu ecossistema. E esse ecossistema é formado por:

                    React <br/>
                    JSX <br/>
                    ES2015 <br/>
                    Webpack <br/>
                    Flux/Redux <br/>
                    axios/fetch <br/>
                    Jest/Mocha <br/>

               </p>
               <tr> </tr>
               <h3 style={{textAlign: 'center'}} >O Virtual DOM</h3>
               <p style={{textAlign : 'justify'}} >
                   O Virtual DOM é uma espécie de "emulador" que o ReactJS cria baseado no DOM que
                   de fato está sendo renderizado no browser . Qualquer alteração feita no Virtual DOM
                   que não está sendo renderizada no browser  , o ReactJS aplica a alteração <b>SEM MEXER </b>
                   nos demais elementos da arvore , sendo assim a alterações feitas na tela carregam muito
                   mais rapido . 
                   <br />  
               </p>
                <tr> </tr>
               <h3 style={{textAlign: 'center'}} >Componentes</h3>
               <p style={{textAlign : 'justify'}} >
                   Componentes podem ser considerados como funções do JavaScript, pois : Podem ou não ter parâmetros,
                   e sempre quando é executada retorna algo  . Em ReactJS os parâmetros são chamados de <b>props</b> e 
                   o retorno é um conteúdo JSX .         
                   <br />            
               </p>
               <h3 style={{textAlign: 'center'}} >Props</h3>
               <p style={{textAlign : 'justify'}} >
                   Props são os parâmetros que meu componente recebe , são acessiveis através da escrita : this.props , 
                   as props podem ser usadas no componente ,  
                   <br />                    
               </p> 
               <h3 style={{textAlign: 'center'}} >State</h3>
               <p style={{textAlign : 'justify'}} >
                   State é um objeto que representa o estado do componente , através dele podemos 
                   alterar o estado dos nossos componentes 
               </p>
               <p><b>Fonte : </b>https://www.youtube.com/watch?v=WPYI2CcRX7c</p>                
            </div>
        );
    }
}
