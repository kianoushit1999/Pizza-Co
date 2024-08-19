import { getAddress } from "../../services/apiGeocoding";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { action } from "../order/CreateOrder";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState = {
  username: "",
  status: "",
  position: {},
  address: "",
  error: ""
};

export const fetchAddress = createAsyncThunk("user/fetchAddress", async function () {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  return { position, address };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(fetchAddress.pending, (state)=>{
    state.status = "loading"
  }).addCase(fetchAddress.fulfilled, (state, action) => {
    state.status = "fetched"
    state.address = action.payload.address
    state.position = action.payload.position
  }).addCase(fetchAddress.rejected, (state) => {
    state.status = "error",
    state.error = action.error.message
  })
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
