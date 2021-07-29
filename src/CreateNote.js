import React, {useState} from 'react'; 
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

  const [expand , setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {

    const {value,name} = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const normal = () => {
    setExpand(false);
  };

  return (
    <>
        <div className="main" onDoubleClick={normal}>
            <form>
                {expand?<input type="text" onChange={InputEvent} name="title" value={note.title} placeholder="Title" autoComplete='off' />:null}

                <textarea row="" column="" onClick={expandIt} onChange={InputEvent} name="content" value={note.content} placeholder="Write a Note"/>

                {expand?<Button onClick={addEvent} className="btn"><AddIcon className="add" /></Button>:null}
            </form>
        </div>
    </>
  );
}

export default CreateNote;