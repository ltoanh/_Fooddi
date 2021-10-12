import React, { useEffect } from "react";
//=================== style========================
import "./bestseller.css";
//=================== api =========================
import { baseURL } from "../../../api-config/axiosConfig";
import axios from "axios";

function BestSeller() {
  useEffect(() => {
    axios.get(baseURL + "/best-foods").then((res) => console.log(res.data));
  }, []);

  return (
    <section className="container best-seller">
      <p className="small-title">Best seller</p>
      <h2 className="title">What's the most popular?</h2>
    </section>
  );
}

export default BestSeller;
