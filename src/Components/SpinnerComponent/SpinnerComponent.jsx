import React, { useEffect, useState } from "react";
import "./SpinnerComponent.scss";

function SpinnerComponent() {
  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 3000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="c-spinner-container">
              <span>Loading...</span>
              <div className="c-half-spinner"></div>
            </div>
          ) : (
            <div className="c-spinner-logo">
            
            <div className="c-spinner-completed"></div>
            </div>
            
          )}
        </>
      ) : (
        <>
          
        </>
      )}
    </>
  );
}

export default SpinnerComponent;