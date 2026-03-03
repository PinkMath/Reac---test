import "./Card.css";

export default function CardJogo({ capa, titulo, genero, preco, onSale }) {
  const promotionStatusText = onSale ? "Em promoção!" : "Não está em promoção.";

  return (
    <div className="game-card-container">
      <img
        src={capa}
        alt={`Capa do jogo: ${titulo}`}
        className="game-card-image"
      />
      <div className="game-card-details">
        <h3 className="game-card-title">{titulo}</h3>
        <p className="game-card-genre">Gênero: {genero}</p>
        <p className="game-card-price">
          Preço: {preco === 0 ? "Grátis" : `R$ ${preco}`}
        </p>
        <p className="game-card-promotion-status">
          Status: {promotionStatusText}
        </p>
        <div className="game-card-promotion-indicator-wrapper">
          <span
            className="game-card-promotion-indicator"
            style={{ backgroundColor: onSale ? "#9dff7f" : "#ff4d4d" }}
            title={promotionStatusText}
          ></span>
        </div>
      </div>
    </div>
  );
}
