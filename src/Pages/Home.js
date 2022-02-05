import "../CSS/Home.css";
import { Link } from "react-router-dom";
function Home() {

    // const images = new Map(['Denise', 'https://i1.sndcdn.com/avatars-GPB5fe23iwXXpyh4-q7XYiA-t500x500.jpg'], ['Boy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBvuGTrtZAaPmR1oJGV-7rToaKjAPmkUwrA&usqp=CAU']);

    // function selectProfile(name){
    //     if(name != localStorage.getItem('profile')){
    //         alert("Now setting character to... " + name)
    //     }
    //     localStorage.setItem('profile', name)
    // }

    // function loadProfile(){
    //     // Set character to the 'profile' value from localStorage
    //     var character = localStorage.getItem('profile');
    //   ;
    //     if (character) {
    //       display_character(character)
    //     }
    //   }

    // function loadProfile(){
    //     // Set character to the 'profile' value from localStorage
    //     var character = localStorage.getItem('profile');
    //   ;

    //     if (character) {
    //       display_character(character)
    //     }
    //   }



    //   function display_character(name) {
    //     var img = document.createElement('img');
    //     img.src = images.get(name);
    //     document.getElementById('character').appendChild(img);
    //   } 

    //   function loadHome(){
    //     if (localStorage.getItem('profile')) {
    //       display_character(name)
    //     }
    //   }


    return (
        <div className="Home">
            <h1>Welcome to Anime TradeOff</h1>
            <Link to="/animes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCBKGlkMxEk_rqLc3TXIPvuzOtJ28vzJOYQ&usqp=CAU" alt='anime vs anime' /></Link>
            <h2><Link to="/animes" style={{ textDecoration: 'none' }}>Choose Your Anime</Link></h2>
            <section>

            </section>
        </div>


    )
};

export default Home;