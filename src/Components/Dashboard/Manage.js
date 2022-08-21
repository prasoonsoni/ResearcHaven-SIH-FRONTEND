import React from "react";
import { useFetch } from "../Hooks/useFetch";
import Paper from "./Paper";

function Manage() {
  let url1 =
    "https://webcrawlers-sih.vercel.app/api/researchpaper/draft-research-papers";
  let url2 =
    "https://webcrawlers-sih.vercel.app/api/researchpaper/published-by-user";
  const { data1, isLoading1, error1 } = useFetch(url1, "GET");
  const { data2, isLoading2, error2 } = useFetch(url2, "GET");

  return (
    <div>
      {data1}
      {data2}
    </div>
  );
}

export default Manage;
