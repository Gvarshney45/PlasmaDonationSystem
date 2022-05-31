import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const DeleteDonor = () => {
  const history = useHistory();
  const [userData, setUserData] = useState();
  const deletePage = async () => {
    try {
      const res = await fetch("/api/deletedonor", {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/donorlist");
    }
  };

  useEffect(() => {
    deletePage();
  }, []);

  return <div>DeleteDonor</div>;
};

export default DeleteDonor;
