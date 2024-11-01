const Note = ({ note }) => {
    console.log('Note component props:', note);
    return <li>{note.content}</li>;
  };
  
  export default Note;