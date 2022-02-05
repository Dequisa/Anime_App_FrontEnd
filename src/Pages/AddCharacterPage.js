import CharacterNewForm from "../Components/CharacterNewForm";
import "../CSS/AddCharacterPage.css";

function AddCharacterPage() {
  return (
    <div className="newCharPage">
      <h2>
        Am I Missing your Favorite Anime Character? Add Anime Character here!
      </h2>
      <CharacterNewForm />
    </div>
  );
}

export default AddCharacterPage;
