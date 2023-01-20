import * as React from "react";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
// import { updateSampleSection } from "../common/sample-base";
import "./templates.module.css";
function PartialVisible() {
  function HomeImages() {
    return (
      <figure className="img-container">
        <img
          src="/hostel/ (1).jpg"
          alt="bridge"
          style={{ height: "100%", width: "100% " }}
        />
        <figcaption className="img-caption">
          আমিন ছাত্রাবাস : ফ্রন্ট ভিউ
        </figcaption>
      </figure>
    );
  }
  function itemTemplate2() {
    return (
      <figure className="img-container">
        <img
          src="/hostel/ (2).jpg"
          alt="trees"
          style={{ height: "100%", width: "100% " }}
        />
        <figcaption className="img-caption">আমিন ছাত্রাবাস : ছাদ ১</figcaption>
      </figure>
    );
  }
  function itemTemplate3() {
    return (
      <figure className="img-container">
        <img
          src="/hostel/ (3).jpg"
          alt="waterfall"
          style={{ height: "100%", width: "100% " }}
        />
        <figcaption className="img-caption">আমিন ছাত্রাবাস : ছাদ ২</figcaption>
      </figure>
    );
  }
  function itemTemplate4() {
    return (
      <figure className="img-container">
        <img
          src="/hostel/ (7).jpg"
          alt="sea"
          style={{ height: "100%", width: "100% " }}
        />
        <figcaption className="img-caption">আমিন ছাত্রাবাস : সিঁড়ি</figcaption>
      </figure>
    );
  }
  function itemTemplate5() {
    return (
      <figure className="img-container">
        <img
          src="/hostel/ (9).jpg"
          alt="rocks"
          style={{ height: "100%", width: "100% " }}
        />
        <figcaption className="img-caption">
          আমিন ছাত্রাবাস : খেলার মাঠ
        </figcaption>
      </figure>
    );
  }
  return (
    <div className="control-pane">
      <div className="control-section partial-carousel-section">
        <div className="control carousel-sample">
          {/* Render the Carousel Component */}
          <CarouselComponent cssClass="partial-carousel" partialVisible={true}>
            <CarouselItemsDirective>
              <CarouselItemDirective template={HomeImages.bind(this)} />
              <CarouselItemDirective template={itemTemplate2.bind(this)} />
              <CarouselItemDirective template={itemTemplate3.bind(this)} />
              <CarouselItemDirective template={itemTemplate4.bind(this)} />
              <CarouselItemDirective template={itemTemplate5.bind(this)} />
            </CarouselItemsDirective>
          </CarouselComponent>
        </div>
      </div>
    </div>
  );
}
export default PartialVisible;
