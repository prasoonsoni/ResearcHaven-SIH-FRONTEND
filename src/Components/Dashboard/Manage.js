import React from "react";
import { useFetch } from "../Hooks/useFetch";

function Manage() {
  const {data,isLoading,error} = useFetch();

  return (
    <div>
      Manage
    </div>
  );
}

export default Manage;
