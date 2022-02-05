import QuizDetailPage from "../Components/QuizDetailPage.js";
let favorites = [
  {
    id: 1,
    anime: "Dragon Ball Z",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hjmL09dOaIkHnBmDa3tECzmszPohWiCSMg&usqp=CAU",
  },
  {
    id: 2,
    anime: "Attack on Titan",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTo17sWqXEmpUR0Ul9rDruczLM4z6CFyOQA&usqp=CAU",
  },
  {
    id: 3,
    anime: "Hunter X Hunter",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCuNSbIszVJFSs675a8J2wNgZC0wx8evxLA&usqp=CAU",
  },
  {
    id: 4,
    anime: "Demon Slayer",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo7lqrzs7YB7x4Cke9s3O9ypT_uiLQpHGGA&usqp=CAU",
  },
  {
    id: 5,
    anime: "Pokemon",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw0cLZO01zYApHq-04TifJPwFsmSkBKGHQg&usqp=CAU",
  },
  {
    id: 6,
    anime: "Pokemon",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw0cLZO01zYApHq-04TifJPwFsmSkBKGHQg&usqp=CAU",
  },
  {
    id: 7,
    anime: "Pokemon",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw0cLZO01zYApHq-04TifJPwFsmSkBKGHQg&usqp=CAU",
  },
  {
    id: 8,
    anime: "Pokemon",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw0cLZO01zYApHq-04TifJPwFsmSkBKGHQg&usqp=CAU",
  },
  {
    id: 9,
    anime: "Pokemon",
    favorite: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw0cLZO01zYApHq-04TifJPwFsmSkBKGHQg&usqp=CAU",
  },
];
function QuizPage() {
  return (
    <div className="quiz">
      <QuizDetailPage favorites={favorites} />
    </div>
  );
}
export default QuizPage;
