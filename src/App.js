import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Form />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
