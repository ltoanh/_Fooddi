import fooddiApi from "api-config/fooddiApi";
import React, { useEffect, useState } from "react";
import "./delivery.css";
import DeliveryItem from "./DeliveryItem";
// =============== GSAP ====================
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Delivery() {
  const [listDeliveryEmployee, setListDeliveryEmployee] = useState([]);

  // fetch api employee
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        let response = await fooddiApi.getEmployeeList();
        let deliveryList = response.filter(
          (employee) => employee.position === "delivery"
        );
        console.log(response);
        console.log(deliveryList);
        setListDeliveryEmployee(deliveryList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployee();
  }, []);

  // GSAP
  useEffect(() => {
    gsap
      .timeline()
      .add()
      .from(".delivery-list", {
        y: "100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: ".delivery-list",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      });
  }, []);

  return (
    <section id="delivery">
      <div className="container">
        <p className="small-title">Delivery</p>
        <h2 className="title">
          A Moments Of Delivered
          <br />
          On Right Time & Place
        </h2>
        <div className="delivery-list">
          {listDeliveryEmployee &&
            listDeliveryEmployee.map((deliveryMan, id) => (
              <DeliveryItem
                key={id}
                name={deliveryMan.name}
                imgSrc={deliveryMan.img_src}
                phoneNumber={deliveryMan.phone_number}
                satisfied={deliveryMan.satisfied}
                unsatisfied={deliveryMan.unsatisfied}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Delivery;
