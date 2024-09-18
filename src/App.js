import CourseJourney from "./components/CourseJourney";
import Courses from "./components/Courses";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Trainers from "./components/Trainers";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <CourseJourney />
      <Courses/>
      <Trainers/>

      </div>
    
  );
}

export default App;
