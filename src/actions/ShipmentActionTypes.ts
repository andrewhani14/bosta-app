export const Shipment_LOADING = "Shipment_LOADING";
export const Shipment_FAIL = "Shipment_FAIL";
export const Shipment_SUCCESS = "Shipment_SUCCESS";

export type ShipmentType = {
  TrackingNumber: string,
  provider: string,
  CurrentStatus: {
    state: string,
    timestamp: Date
},
  PromisedDate: Date,
  TrackingURL: `bosta.co/tracking-shipment/?track_num=$TrackingNumber`,
  TransitEvents: [
    {
      state: string,
      timestamp: Date,
      hub: string,
    }
  ],
}

export interface ShipmentLoading {
  type: typeof Shipment_LOADING
}

export interface ShipmentFail {
  type: typeof Shipment_FAIL
}

export interface ShipmentSuccess {
  type: typeof Shipment_SUCCESS,
  payload: ShipmentType
}

export type ShipmentDispatchTypes = ShipmentLoading | ShipmentFail | ShipmentSuccess