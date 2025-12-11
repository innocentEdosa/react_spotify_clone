import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(30);

  const onClickHandler = () => {
    setCounter(counter + 1);
  };

  // useEffect(() => {
  //   console.log(' i am from the effect');

  //   return () => {
  //     console.log("unmounted")
  //   }
  // }, [counter])

  return (
    <div className={styles.wrapper}>
      <div className={styles.counterDisplay}>Counter {counter}</div>
      <button onClick={onClickHandler} className={styles.counterButton}>
        Click me to Count{" "}
      </button>
    </div>
  );
};

export default Counter;
