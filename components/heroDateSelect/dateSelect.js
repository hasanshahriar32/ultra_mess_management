import * as React from "react";
import { updateSampleSection } from "./sample-base";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "./dateselect.module.css";

// import styles from "./dateselect.module.css";

const DateSelect = () => {
  let calendarInstance;
  const selectedValues = [];

  // range
  const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 7);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 27);

  function onchange(args) {
    /*Displays selected date in the label*/
    // document.getElementById("date_label").textContent =
    //   "Selected Value: " + args.value.toLocaleDateString();

    var element = document.getElementById("multiselect");
    element.innerHTML = "";
    for (var index = 0; index < calendarInstance?.values.length; index++) {
      element.insertBefore(
        document.createTextNode(calendarInstance.values[index].toString()),
        element.childNodes[0]
      );
      // make a  line break and list the selected dates
      element.insertBefore(document.createElement("br"), element.childNodes[0]);
      console.log(calendarInstance.values[index].toString() + " ");
      //set to localstorage
      localStorage.setItem(
        "mealDate",
        calendarInstance.values[index].toString()
      );
    }
  }

  return (
    <div
      className="hero min-h-screen bg-base-200"
      // style={{ backgroundImage: `url("https://placeimg.com/1000/800/tech")` }}
    >
      <div className="hero-content flex-col lg:flex-row gap-5 ">
        <div className=" control-section bg-base-300 m-3 p-4 rounded-lg">
          <div
            id="control_wrapper"
            className="col-lg-6 col-sm-8 col-md-8 multiselectWrapper "
          >
            <div className="calendar-control-section w-28">
              <CalendarComponent
                id="calendar"
                isMultiSelection={true}
                values={selectedValues}
                min={minDate}
                max={maxDate}
                ref={(scope) => {
                  calendarInstance = scope;
                }}
                change={onchange.bind(this)}
                created={onchange.bind(this)}
              ></CalendarComponent>
            </div>
          </div>
        </div>
        <div>
          <label style={{ paddingTop: "22px" }}>Selected Meal Dates</label>
          <div className="content-value">
            <div id="multiselect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
