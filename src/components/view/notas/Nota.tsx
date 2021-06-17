import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import { useGlobalContext } from '../../context/appContext';

import "react-quill/dist/quill.snow.css";
import "./editor.css"

const Nota = () => {
  const $store = useGlobalContext();
  const { id } = useParams()
  const [nota, setNota] = useState({id:0, title: "", body: "", updated_at: "",})

  let text = ""

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code"
  ];

  const modules = {
    
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "color", "code" ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ],
  }

  function handler(delta, oldContents, source) {
    text = delta
  }

  async function loadNota (){
    const notaResult = await $store.getNotaById(id)
    setNota(notaResult)
  }

  function saveNota() {
    const updateNota = {
      body: text,
      title: nota.title
    }
    $store.updateNota(id, updateNota)
  }

  useEffect(() => {
    loadNota()
  }, [])

  return (
    <div className="wrapper container">
      <div className="cabezara">
        <div className="container_2 cabezara_container">
          <div className="cabezara_text">
            <h1 className="title-cabezera">{nota.title}</h1>
            <button className="button_btn" onClick={saveNota}>Guardar cambios</button>
          </div>
        </div>
      </div>
      <div className="container_2">
        <div className="editor">
          <div className="editor">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={nota.body}
              onChange={handler}>
              <div className="my-editing-area" />
            </ReactQuill>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nota