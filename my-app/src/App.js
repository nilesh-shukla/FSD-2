
import logo from './logo.svg';
import './App.css';  
import Header from './MyComponent/Header';
import TextForm from './MyComponent/TextForm';


function App() {
  return (
    <>
    <Header title="TextUtils" aboutText="AboutTextUtils" searchBar={false}/>
    <TextForm />
    </>
  );
}

export default App;