import * as React from "react";
import { updateSampleSection } from "./sample-base";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "./dateselect.module.css";

// import styles from "./dateselect.module.css";

const DateSelect = () => {
  let calendarInstance;
  const selectedValues = [];
  const [modmindate, setmodMindate] = React.useState(new Date());
  const [modmaxdate, setmodMaxdate] = React.useState(new Date());

  //if mealDate is available
  React.useEffect(() => {
    const meal = localStorage.getItem("mealDate");
    const mealDates = meal.split(" ");
    const mealDate1 = mealDates[0];
    const mealDate2 = mealDates[1];
    setmodMindate(mealDate1);
    setmodMaxdate(mealDate2);
  }, []);

  // set min and max date
  const updateMinSection = (e) => {
    const minDateValue = new Date(document.getElementById("minDate").value);
    // calendarInstance.min = minDateValue;
    // calendarInstance.dataBind();
    console.log(e.target.value);
    setmodMindate(e.target.value);
    // setMindate(minDate);
  };
  const updateMaxSection = (e) => {
    const minDateValue = new Date(document.getElementById("minDate").value);
    // calendarInstance.min = minDateValue;
    // calendarInstance.dataBind();
    console.log(e.target.value);
    setmodMaxdate(e.target.value);
    // setMindate(minDate);
  };

  // range
  const minDate = modmindate;
  const maxDate = modmaxdate;

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
  const setSubmit = () => {
    localStorage.setItem("mealDate", modmindate + " " + modmaxdate);
  };
  return (
    <div
      className="hero min-h-screen bg-base-200"
      // style={{ backgroundImage: `url("https://placeimg.com/1000/800/tech")` }}
    >
      <div className="hero-content flex-col lg:flex-row gap-5 ">
        <div className=" control-section bg-base-300 m-3 p-4 rounded-lg">
          {/* control  */}
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
          {/* min and max  */}
          <div className="my-3">
            <label style={{ paddingTop: "22px" }}>From Date </label>
            <input
              type="date"
              id="minDate"
              onChange={updateMinSection}
              className="e-input mr-5"
            />
            <label style={{ paddingTop: "22px" }}>To Date </label>
            <input
              type="date"
              id="maxDate"
              className="e-input"
              onChange={updateMaxSection}
              //set value 7 days from today
              // defaultValue={
              //   new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
              //     .toISOString()
              //     .split("T")[0]
              // }
            />
            <button
              type="submit"
              className="btn btn-secondary btn-outline mx-2"
              onClick={setSubmit}
            >
              Set
            </button>
          </div>

          {/* selected dates  */}
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
