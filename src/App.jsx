import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { Audio } from "react-loader-spinner";

// Componente em classé é uma classe que herda a classe Component do React, e retorna HTML dentro do método render.

// Componente funcional é uma função que retorna HTML

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data;
      console.log(newsData);
      setNews(newsData.results);
    }

    loadNews();
  }, []);
  // Método responsável por renderizar o conteudo HTML do nosso componentes

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.lenght === 0 ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
