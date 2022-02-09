import {useState, useRef, useEffect} from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(()=> { 
    if(enteredNameIsValid){
      console.log("Name Input is valid")
    }
  }, [enteredNameIsValid])

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return;
    }
  }

  const nameInputChangeHandler = event => {
    setEnteredNameTouched(true);
    setEnteredName(event.target.value)
    if(event.target.value.trim() !== ''){
      setEnteredNameIsValid(true);
    } 
  }

  const formSubmissionHandler = event => {

    event.preventDefault();

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true);

    //Using state onChange is better if you need the input monitored more than once
    console.log(enteredName);

    //Ref is better if you only need the value once
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)
    setEnteredName("")
  }

  const nameInputClasses = !enteredNameIsValid && enteredNameTouched ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        value={enteredName} 
        onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler}
        ref={nameInputRef}/>
      </div>
      {!enteredNameIsValid && enteredNameTouched && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
