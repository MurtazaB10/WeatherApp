import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {

  const [addItem , setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev , note];
    });
  };

  const onDelete = (id) => {
    setAddItem((prev) => 
      prev.filter((curr , indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val , index) => {
        return (<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />);
      })}
      <Footer />
    </>
  );
}

export default App;