import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Monitor extends Component {
  render() {
    return (
      <div className="flex flex-col h-[100%] w-[100%]">
        <div className="border-b-2 border-b-[#002956] flex items-center justify-between py-4 px-32">
          <div className="rounded-[30px] py-4 px-6 flex flex-col items-center bg-white w-[45%]">
            <h1 className="text-[#808080] text-[20px] font-extrabold mb-3">
              Pothole Indicator
            </h1>
            <div className="flex items-center justify-between w-full px-10">
              <p className="text-[#1259A5] text-[20px] font-bold">True</p>
              <p className="text-[#165DA969] text-[20px] font-bold">False</p>
            </div>
          </div>
          <div className="rounded-[30px] py-4 px-6 flex flex-col items-center bg-white w-[45%]">
            <h1 className="text-[#808080] text-[20px] font-extrabold mb-3">
              Bump Indicator
            </h1>
            <div className="flex items-center justify-between w-full px-10">
              <p className="text-[#1259A5] text-[20px] font-bold">True</p>
              <p className="text-[#165DA969] text-[20px] font-bold">False</p>
            </div>
          </div>
        </div>
        <div className="mt-20 w-[80%] h-[60%] self-center map-wrapper relative">
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%" }}
            zoom={10}
            initialCenter={{
              lat: 9.5835,
              lng: 6.54997,
            }}
          />
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBDsQd0v5dn1a9UI1eaM__-eFKRvrgaqbo",
})(Monitor);
