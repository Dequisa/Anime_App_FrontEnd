import Dashboard from "../Components/Dashboard";
let toDoList = [
  {
    id: 1,
    task: "Dragon Ball Z",
    complete: true,
  },
  {
    id: 2,
    task: "Attack on Titan",
    complete: true,
  },
  {
    id: 3,
    task: "Hunter X Hunter",
    complete: false,
  },
  {
    id: 4,
    task: "Pokemon",
    complete: false,
  },
];

function DashboardPage() {
  return (
    <div className="dashboardPage">
      <Dashboard todo={toDoList} />
    </div>
  );
}

export default DashboardPage;
