import {combineReducers} from "redux";
import ShipmentReducer from "./ShipmentReducer";

const RootReducer = combineReducers({
  Shipment: ShipmentReducer
});

export default RootReducer