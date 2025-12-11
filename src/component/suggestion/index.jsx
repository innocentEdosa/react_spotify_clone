import { useEffect, useState } from "react";

const Suggestion = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div>{isLoading ? "loading" : ""}</div>
      {users?.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
};

// mounting => react creates and add component to the ui
// updating => state change, or props changes
// unmounting => component is removed from the ui
export default Suggestion;
