import {useState, useEffect} from 'react';

const useCounter = (increment = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + increment);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [])

    return counter;
};

export default useCounter;