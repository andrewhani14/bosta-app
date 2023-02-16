import {Dispatch} from "redux";
import {Shipment_FAIL, Shipment_LOADING, Shipment_SUCCESS, ShipmentDispatchTypes} from "./ShipmentActionTypes";
import axios from "axios";

export const GetShipment = (TrackingNumber: string) => async (dispatch: Dispatch<ShipmentDispatchTypes>) => {
  try {
    dispatch({
      type: Shipment_LOADING
    })

    const res = await axios.get(`https://tracking.bosta.co/shipments/track/${TrackingNumber}`);

    dispatch({
      type: Shipment_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: Shipment_FAIL
    })
  }
};