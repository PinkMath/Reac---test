import CardJogo from "./assets/components/Card/CardJogo";
import "./app.css";

function App() {
  return (
    <>
      <div className="titulo-pag">
        <h1>jogos</h1>
      </div>
      <div className="card-container">
        <CardJogo
          capa="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.TxKyFXeG6SkJv-1AJ2B8BQHaEE%3Fpid%3DApi&f=1&ipt=77c606355517e06023b7bc266b805633da825d43637055d604ccf3887fb07661&ipo=images"
          titulo="Minecraft"
          genero="Aventura"
          preco={90}
          onSale={false}
        />
        <CardJogo
          capa="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.R8VgxG-LNWa6m_2a1HXolwHaEK%3Fpid%3DApi&f=1&ipt=29c1cdafb66d8bfaba5c8afa237441dca4581fdda854bc248d59fc8000907c4c&ipo=images"
          titulo="Elden Ring"
          genero="Mundo aberto"
          preco={300}
          onSale={true}
        />
        <CardJogo
          capa="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.R-syjqxd3WPr0Jbe19DVqwHaEK%3Fpid%3DApi&f=1&ipt=6dea825bde232f20d73f507fcffe0cc70d95cc0ffde4dfedaa0eaff76d25beba&ipo=images"
          titulo="League of Legends"
          genero="Coperativo"
          preco={0}
          onSale={false}
        />
        <CardJogo
          capa="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.fSeVSDJNOjy-9A4dx-hJlAHaEK%3Fpid%3DApi&f=1&ipt=5921deea580fef3d2253edb7e9f5d407efc83303ea9883b197666df53f3839a9&ipo=images"
          titulo="Valorant"
          genero="Tiro"
          preco={0}
          onSale={true}
        />
      </div>
    </>
  );
}

export default App;
