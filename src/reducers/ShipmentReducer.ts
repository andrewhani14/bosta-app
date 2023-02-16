import {
  Shipment_FAIL,
  Shipment_LOADING,
  Shipment_SUCCESS,
  ShipmentDispatchTypes,
  ShipmentType
} from "../actions/ShipmentActionTypes";

interface DefaultStateI {
  loading: boolean,
  Shipment?: ShipmentType
}

const defaultState: DefaultStateI = {
  loading: false
};

const ShipmentReducer = (state: DefaultStateI = defaultState, action: ShipmentDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case Shipment_FAIL:
      return {
        loading: false,
      }
    case Shipment_LOADING:
      return {
        loading: true,
      }
    case Shipment_SUCCESS:
      return {
        loading: false,
        Shipment: action.payload
      }
    default:
      return state
  }
};


export default ShipmentReducer