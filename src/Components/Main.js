import React, { useState, useEffect } from "react";
const Main = () => {
  const [name, setName] = useState("");
  const [Dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [details, setDetails] = useState([]);
  const [hide, setHide] = useState("");
  const [newRow,setNewRow]=useState(true)
  useEffect(() => {
    setUserDetails({
      Name: `${name}`,
      BirthDate: `${Dob}`,
      AadharNumber: `${aadhar}`,
      MobNumber: `${number}`,
      Age: `${age}`,
    });
  }, [name, Dob, aadhar, number, age]);

  useEffect(() => {
    if (Dob === "") {
    } else {
      let dod = new Date(Dob);
      let month_diff = Date.now() - dod.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      setAge(Age);
    }
  }, [Dob]);

  const adduser = () => {
    if (name === "" || Dob === "" || aadhar === "" || number === "") {
      alert("Input field is not empty!");
    } else if (aadhar.length !== 12) {
      alert("Aadhar Number should be of 12 digits.");
    } else if (number.length !== 10) {
      alert("Mobile Number should be of 10 digits.");
    } else {
      setDetails([...details, userDetails]);
      setHide("none");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(details));
    
  }, [details]);

  const saveToRemove = (e) => {
    console.log(e);
    let arr = [];
    details.forEach((ele) => {
      if (ele.AadharNumber !== e.AadharNumber) {
        arr.push(ele);
      }
    });
    setDetails(arr);
    remove();
  };

  const remove = () => {
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };
  return (
    <>
    <div className="main-contant d-flex">
      <h3 className="add-person">Add New Person</h3>
      <h3>Total Added Users : {details?.length}</h3>
      <div className="all-info">
        <table>
          <thead>
            <tr>
              <th className="info">Name</th>
              <th className="info">Date of birth</th>
              <th className="info">Aadhar Number</th>
              <th className="info">Mobile Number</th>
              <th className="info">Age</th>
              <th className="info">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((el, idx) => {
              return (
                   <div className="input-data"  key={idx}>
                <tr>
                  <td>
                    <input value={el.Name} type={"text"} />
                  </td>
                  <td>
                    <input value={el.BirthDate}
                     type={"date"}
                    />
                  </td>
                  <td>
                    <input
                      className="input-num"
                      value={el.AadharNumber}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <input
                      className="input-num"
                      value={el.MobNumber}
                      type={"number"}
                    />
                  </td>
                  <td>{el.Age}</td>
                  <td>
                    <button className="click-btn-box">Save</button>
                    <button
                      className="click-btn-box"
                      onClick={() => saveToRemove(el)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                   </div>
              );
            })}
            {
              newRow?
         
            <tr  style={{ display: hide }}>
              <td>
                <input
                  value={name}
                  type={"text"}
                  placeholder="enter name"
                  onChange={(el) => setName(el.target.value)}
                  />
              </td>
              <td>
                <input
                  value={Dob}
                  className="input-date"
                  type={"date"}
                  onChange={(el) => setDob(el.target.value)}
                />
              </td>
              <td>
                <input
                  className="inputs"
                  value={aadhar}
                  type={"number"}
                  placeholder="Aadher num"
                  onChange={(el) => setAadhar(el.target.value)}
                />
              </td>
              <td>
                <input
                  className="inputs"
                  value={number}
                  type={"number"}
                  placeholder="mobile num"
                  onChange={(el) => setNumber(el.target.value)}
                  />
              </td>
              <td>{age}</td>
              <td>
                <button className="add-btn click-btn-box" onClick={() => adduser()}>
                  Save
                </button>
                <button className="remove-btn click-btn-box" onClick={() => remove()}>
                  Delete
                </button>
              </td>
            </tr>
             : null
            }
          </tbody>
        </table>
        </div>
        <button className="add-users"  onClick={()=>setNewRow(true)}>
        Add
      </button>
    </div>
    </>
  );
};

export default Main;
