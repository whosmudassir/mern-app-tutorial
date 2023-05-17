import React, { useEffect, useState } from "react";
import "./App.css";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import AddNoteBtn from "./components/AddNoteBtn";
import styles from "./styles/Note.module.css";
import { fetchNotes } from "./network/notes_api";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await fetchNotes();
        setNotes(notes);
        console.log(notes);
      } catch (e) {
        alert(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <AddNoteBtn />
      <Container className={styles.cardWrapper}>
        <Row xs={1} md={2} lg={3} xl={4} className={"g-4"}>
          {notes.map((note) => (
            <Col>
              <Note note={note} key={note._id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
