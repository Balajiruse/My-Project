/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editNewDoctor } from "../helpers/helper";

const EditDoctor = ({ doctorData, setDoctordata, editId }) => {
  const [docName, setDocName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [specialization, setSpecilazation] = useState("");
  const [docStatus, setDocStatus] = useState("");
  const [index,setIndex]=useState();
  const navigate = useNavigate();
  useEffect(() => {
    const selectedDoctor = doctorData.filter((doc) =>doc.idx == editId);
    const selectedDocIndex = doctorData.findIndex((doc) =>doc.idx == editId);
    setIndex(selectedDocIndex)
    setDocName(selectedDoctor[0].doc_name);
    setHospitalName(selectedDoctor[0].hospital_name);
    setSpecilazation(selectedDoctor[0].specialization);
    setDocStatus(selectedDoctor[0].status);
  }, [editId]);

  // update the doctor info
  const updateDoctorDetails = () => {
    const editedDoctor = {
      doc_name: docName,
      hospital_name: hospitalName,
      specialization,
      status: docStatus,
    };
editNewDoctor(editId,editNewDoctor)
.then((data)=>{
  if(data){
    doctorData[index]=editedDoctor;
    setDoctordata([...doctorData]);
    navigate("/");
  }else{
    console.log("error occured");
  }
});
    
  };

  return (
    <div className="grid grid-rows-4 justify-center gap-3 ">
      <input
        type="text"
        placeholder="Enter Doctor Name"
        className="input input-bordered w-80"
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Hospital"
        className="input input-bordered w-80"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Specilization"
        className="input input-bordered w-80"
        value={specialization}
        onChange={(e) => setSpecilazation(e.target.value)}
      />
      <button
        className="btn btn-secondary w-24 justify-self-center"
        onClick={updateDoctorDetails}
      >
        Update
      </button>
    </div>
  );
};

export default EditDoctor;