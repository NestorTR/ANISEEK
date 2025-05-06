import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card__image-container">
        <img
          src={
            character.images?.jpg?.image_url || "/images/default-character.jpg"
          }
          alt={character.name}
          className="character-card__image"
        />
      </div>
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
