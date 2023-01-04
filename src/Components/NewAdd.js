import { Link } from "react-router-dom";

const NewAdd = () => {
  return (
    <div className="add-new-person-info">
      <button className="btn-page">
        <Link to={"/"}>Add New Person</Link>
      </button>
      <button className="btn-page">
        <Link to={"/retrieve-page"}>Retrieve Information</Link>
      </button>
    </div>
  );
};

export default NewAdd;
