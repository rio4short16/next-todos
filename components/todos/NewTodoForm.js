import styles from "./NewTodoForm.module.css";
import { useState, useRef } from "react";

function NewTodoForm(prop) {
  const titleInputRef = useRef();
  const createdbyInputRef = useRef();
  const descInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredCreated = createdbyInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      desc: enteredDesc,
      createdby: enteredCreated,
      date: enteredDate,
    };

    console.log(todoData);

    prop.onAddTodo(todoData);
  }
  return (
    <form className={styles.myform}>
      <h4 className={styles.formtitle}> {prop.title} </h4>
      <div className={styles.formgroup}>
        <label className={styles.formlabel} htmlFor="title">
          Title
        </label>
        <input
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          className={styles.forminput}
          type="text"
          id="title"
          ref={titleInputRef}
        ></input>
      </div>
      <div className={styles.formgroup}>
        <label className={styles.formlabel} htmlFor="created">
          Created By
        </label>
        <input
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          className={styles.forminput}
          type="text"
          id="created"
          ref={createdbyInputRef}
        ></input>
      </div>
      <div className={styles.formgroup}>
        <label className={styles.formlabel} htmlFor="date">
          Select Date:
        </label>
        <input
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          className={styles.forminput}
          type="date"
          id="date"
          ref={dateInputRef}
        ></input>
      </div>
      <div className={styles.formgroup}>
        <label className={styles.formlabel} htmlFor="description">
          Description
        </label>
        <textarea
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          id="description"
          className={styles.forminput}
          rows="3"
          ref={descInputRef}
        ></textarea>
      </div>
      <div className={styles.formgroup}>
        <button className={styles.formbutton} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewTodoForm;
