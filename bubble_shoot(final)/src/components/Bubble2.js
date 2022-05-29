import React, { useRef } from "react";
import "./Bubble.css";

export default function Bubble2() {
  const current = useRef(0);

  const handleInsert = (e) => {
    var empty = document.getElementById("empty");
    var allBtnWrapper = document.getElementById("all_button");

    if (e.currentTarget.classList.contains("shifted")) {
      e.currentTarget.classList.remove("shifted");
      allBtnWrapper.appendChild(e.currentTarget);
      console.log(e.currentTarget);
      console.log(e.currentTarget.id);
      allBtnWrapper.insertBefore(
        e.currentTarget,
        allBtnWrapper.children[e.currentTarget.id - 1]
      );
    } else {
      e.currentTarget.classList.add("shifted");
      empty.appendChild(e.currentTarget);
    }
  };

  const handleClickShoot = (e) => {
    var inputval = document.getElementById("input_box").value;
    var currentBtn = document.getElementById(inputval);
    var empty = document.getElementById("empty");
    if (inputval <= 5 && inputval !== "") {
      empty.append(currentBtn);
      currentBtn.classList.add("shifted");
      document.getElementById("error").innerText = "";
    } else {
      document.getElementById("error").innerText =
        "Please enter a valid number.";
    }
    document.getElementById("input_box").value = "";
  };

  return (
    <>
      <div className="main_div">
        <div className="input_div">
          <input
            id="input_box"
            type="Number"
            className="input_box"
            placeholder="Enter a number"
          ></input>
          <span id="error"></span>
        </div>
        <button className="shoot" onClick={handleClickShoot}>
          Shoot
        </button>
        <div className="bubble_container">
          <div className="left_div">
            <div id="empty">
              <h4 className="empty_text">Empty div</h4>
            </div>
          </div>
          <div className="right_div">
            <div className="circles">
              <h4>5 circles</h4>
            </div>
            <div className="all_button" id="all_button">
              <button id="1" className="green" onClick={handleInsert}></button>
              <button id="2" className="pitch" onClick={handleInsert}></button>
              <button id="3" className="blue" onClick={handleInsert}></button>
              <button id="4" className="sky" onClick={handleInsert}></button>
              <button id="5" className="purple" onClick={handleInsert}></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
