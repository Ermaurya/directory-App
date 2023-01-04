import React, { useState } from "react";
// import { Link } from "react-router-dom";

function RetrieveMain() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = () => {
    data.forEach((e) => {
      if (e.AadharNumber === input) {
        setResult(e);
      }
    });
  };
  return (
    <>
    <div className="retrieve d-flex">
      <h3>Retrieve Information</h3>
      <div  className="single-data">
      <div>
        <input
          className="search"
          type={"number"}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-find" onClick={() => check()}>
          Find
        </button>
      </div>
      <div>
        {result === "" ? (
          <h1 className="no-data-found"> NO DATA </h1>
        ) : (
          <div className="find-detail">
            <h3 className="d-info">Name: <span>{result.Name} </span> </h3>
            <h3 className="d-info">DOB: <span>{result.BirthDate} </span> </h3>
            <h3 className="d-info">Aadhar: <span>{result.AadharNumber} </span> </h3>
            <h3 className="d-info">Mobile No: <span>{result.MobNumber} </span> </h3>
            <h3 className="d-info">Age: <span>{result.Age} </span> </h3>
          </div>
        )}
      </div>
      </div>
    </div>
    </>
  );
}

export default RetrieveMain;
