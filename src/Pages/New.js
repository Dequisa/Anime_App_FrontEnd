import AnimeNewForm from "../Components/AnimeNewForm";
import '../CSS/New.css'

function New() {
    return (
        <div className="newFormPage">
            <h2>Am I Missing your Favorite Anime? Add Anime here!</h2>
            <AnimeNewForm />
        </div>
    )
}

export default New;