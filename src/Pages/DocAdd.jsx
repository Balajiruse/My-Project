/* eslint-disable react/prop-types */
// import React from "react";
import WorkSpace from "../componetents/WorkSpace";
import AddDoctor from"../componetents/AddDoctor"

const DocAdd = ({ doctorData, setDoctordata }) => {
  return (
    <div>
      <WorkSpace>
        <AddDoctor doctorData={doctorData} setDoctordata={setDoctordata} />
      </WorkSpace>
    </div>
  );
};

export default DocAdd;