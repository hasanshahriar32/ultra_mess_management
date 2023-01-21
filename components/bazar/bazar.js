import * as React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Month,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { generateObject } from "./helper";
import { updateSampleSection } from "./sample-base";
import "./bazar.module.css";
/**
 * Schedule custom month view sample
 */
function BazarDate() {
  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="control-wrapper">
          <ScheduleComponent
            height="650px"
            eventSettings={{
              dataSource: generateObject(
                new Date(2021, 11, 19).getTime(),
                new Date(2022, 2, 12).getTime(),
                true
              ),
            }}
          >
            <ViewsDirective>
              <ViewDirective
                option="Month"
                displayDate={new Date(2022, 0, 16)}
                numberOfWeeks={4}
              />
            </ViewsDirective>
            <Inject services={[Month, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
}
export default BazarDate;
