import React from "react";
import { UserData } from "./Data";

function Select() {
  return (
    <div className="SelectForm">
      <label className="label">Выберите ID устройства:</label>

      <div className="SelectID">
        <label>
          <input type="checkbox" value="1" defaultChecked />
          {UserData.map((arr) => Number(arr.data.o[0].n))}
        </label>
        <label>
          <input type="checkbox" value="2" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[1].n))}
        </label>
        <label>
          <input type="checkbox" value="3" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[2].n))}
        </label>
        <label>
          <input type="checkbox" value="4" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[3].n))}
        </label>
        <label>
          <input type="checkbox" value="5" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[4].n))}
        </label>
        <label>
          <input type="checkbox" value="6" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[5].n))}
        </label>
        <label>
          <input type="checkbox" value="7" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[6].n))}
        </label>
        <label>
          <input type="checkbox" value="8" defaultChecked/>
          {UserData.map((arr) => Number(arr.data.o[7].n))}
        </label>
      </div>
    </div>
  );
}

export default Select;
