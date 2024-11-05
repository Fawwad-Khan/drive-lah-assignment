import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface DeviceFormStateSlice {
  devices: {
    type?: string;
    bringingOwnDevice?: boolean;
    serial?: string;
    image?: {
      name: string;
      size: number;
      type: string;
      base64: string;
    };
  }[];
}

const name = "deviceForm";

export const deviceFormSlice = createSlice({
  name,
  initialState: {
    devices: [
      {
        type: "",
        bringingOwnDevice: undefined,
        serial: undefined,
        image: undefined,
      },
    ],
  } as DeviceFormStateSlice,
  reducers: {
    setDeviceFormState: (
      state,
      action: PayloadAction<Partial<DeviceFormStateSlice>>
    ) => ({
      ...state,
      ...action.payload,
    }),
    setDeviceType: (
      state,
      action: PayloadAction<{ index: number; type: string }>
    ) => {
      state.devices[action.payload.index].type = action.payload.type;
    },
  },
});

export const { setDeviceFormState, setDeviceType } = deviceFormSlice.actions;

const persistedReducer = persistReducer(
  { key: name, storage: storage },
  deviceFormSlice.reducer
);

export default persistedReducer;
