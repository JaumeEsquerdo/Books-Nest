
import './App.css'


const userData = 
  {id:1, name:"", }
;
const allUsersData = [];

const booksData = [];

const rentalData = [];



function App() {

  const pathValue = window.location.pathname.slice(1) || "home";


  let page;

  switch(pathValue) {
    case 'home':
      page = <Home />;
      break;
    case 'users':
      page = <Users />;
      break;
    case 'books':
      page = <Books />;
      break;
    default:
      page = <Home />;
  }



  return (
    <>
    
      {page}
  
    </>
  )
}

export default App
