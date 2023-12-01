/* eslint-disable react/prop-types */
// import React from "react";
import WorkSpace from "../componetents/WorkSpace";
import Main from "../componetents/Main";

const DocDash = ({ doctorData, setDoctordata }) => {
  return (
    <WorkSpace>
      <Main doctorData={doctorData} setDoctordata={setDoctordata} />
    </WorkSpace>
  );
};

export default DocDash;