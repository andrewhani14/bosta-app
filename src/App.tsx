import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./Store";
import { GetShipment } from "./actions/ShipmentActions";
import { translate } from './translations';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBInputGroup,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import questionPicture from "./assets/question.png";

function App() {
  const currentLanguage = "ar";
  const dispatch = useDispatch();
  const [TrackingNumber, setTrackingNumber] = useState("");
  const ShipmentState = useSelector((state: RootStore) => state.Shipment);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTrackingNumber(event.target.value);
  const handleSubmit = () => dispatch(GetShipment(TrackingNumber));

  return (
    <div className="App" dir="rtl">
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBInputGroup
            className="justify-content-center align-items-center"
            dir="ltr"
            style={{ marginBottom: "20px" }}
          >
            <MDBInput onChange={handleChange} label="Search" />
            <MDBBtn
              onClick={handleSubmit}
              rippleColor="dark"
              style={{ backgroundColor: "#e30613" }}
            >
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInputGroup>
          {ShipmentState.Shipment && (
            <div>
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard
                    className="card-stepper"
                    style={{ borderRadius: "10px", marginBottom: "20px" }}
                  >
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">
                            رقم الشحنة {TrackingNumber}
                          </span>
                          <span className="lead fw-bold">
                            {translate(ShipmentState.Shipment.CurrentStatus.state,currentLanguage)}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">أخر تحديث</span>
                          <span className="lead fw-bold">
                            {ShipmentState.Shipment.CurrentStatus.timestamp.toString().slice(0, 10)}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">إسم التاجر</span>
                          <span className="lead fw-bold">
                            {ShipmentState.Shipment.provider}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">
                            موعد التسليم خلال
                          </span>
                          <span className="lead fw-bold">
                            {ShipmentState.Shipment.PromisedDate.toString().slice(0,10)}
                          </span>
                        </div>
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        {ShipmentState.Shipment?.TransitEvents.map((events) => (
                          <>
                            <span className="d-flex justify-content-center align-items-center big-dot dot">
                              <MDBIcon icon="check text-white" />
                            </span>
                            <hr className="flex-fill track-line" />
                          </>
                        ))}
                      </div>

                      <div className="d-flex flex-row justify-content-between align-items-center">
                        {ShipmentState.Shipment?.TransitEvents.map((events) => (
                          <div className="d-flex flex-column align-items-start">
                            <span style={{ fontSize: "10px" }}>
                              {translate(events.state,currentLanguage)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>

              <MDBRow className="justify-content-center">
                <MDBCol size={8}>
                  <p className="fw-bold mb-1" style={{ textAlign: "right" }}>
                    تفاصيل الشحنة
                  </p>
                  <MDBTable
                    align="middle"
                    bordered
                    small
                    responsive
                    style={{ marginTop: "15px" }}
                  >
                    <MDBTableHead light>
                      <tr>
                        <th scope="col">الفرع</th>
                        <th scope="col">التاريخ</th>
                        <th scope="col">الوقت</th>
                        <th scope="col">التفاصيل</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {ShipmentState.Shipment?.TransitEvents.map((events) => (
                        <tr>
                          <td>
                            <p className="fw-bold mb-1">{translate(events.hub,currentLanguage)}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              {events.timestamp.toString().slice(0, 10)}
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">
                              {events.timestamp.toString().slice(11, 19)}
                            </p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{translate(events.state,currentLanguage)}</p>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>

                <MDBCol size={4}>
                  <p className="fw-bold mb-1" style={{ textAlign: "right" }}>
                    عنوان التسليم
                  </p>

                  <MDBCard
                    className="p-4"
                    style={{ marginTop: "20px", marginBottom: "15px" }}
                  >
                    <MDBCardBody className="p-4">
                      <p className="text-muted">
                        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ٢٢
                        بلوك ١١
                      </p>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard>
                    <MDBCardBody className="p-4">
                      <MDBRow>
                        <MDBCol size={4}>
                          <img src={questionPicture} height="100" alt="" loading="lazy" />
                        </MDBCol>
                        <MDBCol size={8}>
                          <span className="text-muted">
                            هل يوجد مشكلة مع شحنتك ؟
                          </span>
                          <MDBBtn style={{ backgroundColor: "#e30613" }}>
                            إبلاغ عن مشكلة
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          )}
        </MDBContainer>
      </section>
    </div>
  );
}

export default App;
