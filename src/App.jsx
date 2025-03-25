import React, { Fragment } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";

// Componente em classé é uma classe que herda a classe Component do React, e retorna HTML dentro do método render.

// Componente funcional é uma função que retorna HTML

class App extends React.Component {
  // Método responsável por renderizar o conteudo HTML do nosso componentes
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            similique aliquid repellendus magni, dicta, laudantium ullam quos
            laborum perferendis necessitatibus officia? Quidem suscipit eveniet
            amet perferendis repellendus harum sit nulla."
            thumbnail={article1Img}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            similique aliquid repellendus magni, dicta, laudantium ullam quos
            laborum perferendis necessitatibus officia? Quidem suscipit eveniet
            amet perferendis repellendus harum sit nulla."
            thumbnail={article2Img}
          />

          <Article
            title="36 Days of Malayalam Type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            similique aliquid repellendus magni, dicta, laudantium ullam quos
            laborum perferendis necessitatibus officia? Quidem suscipit eveniet
            amet perferendis repellendus harum sit nulla."
            thumbnail={article3Img}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            similique aliquid repellendus magni, dicta, laudantium ullam quos
            laborum perferendis necessitatibus officia? Quidem suscipit eveniet
            amet perferendis repellendus harum sit nulla."
            thumbnail={article1Img}
          />
        </section>
      </>
    );
  }
}

export default App;
