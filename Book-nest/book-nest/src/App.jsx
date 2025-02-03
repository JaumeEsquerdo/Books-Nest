
import './css/App.css'
import Home from './pages/Home'
import Users from './pages/Users'
import Books from './pages/Books'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import MyBooks from './pages/MyBooks';





// const userData = 
//   {id:1, name:"", }
// ;
// const allUsersData = [];

// const booksData = [];

// const rentalData = [];



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
      case 'MyBooks':
        page = <MyBooks/>;
        break;
    default:
      page = <Home />;
  }



  return (
    <>
      <Header />
      {page}
      <Footer/>

  
    </>
  )
}

export default App
