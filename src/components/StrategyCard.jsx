import React from "react";

import Warren_Buffett from "../photo/Warren_Buffett.png";
import Ray_Dalio from "../photo/Ray_Dalio.png";
import Peter_Lynch from "../photo/Peter_Lynch.png";

// import { useState } from 'react';
function StrategyCard(
  inputs,
  handleInputChange,
  investorRef,
  onScrollToInvestor
) {
  return (
    <div className="bg-base-100 p-8 pt-8 pb-4 rounded-xl mt-10 w-full max-w-[650px] shadow-sm">
      <p className="text-4xl font-bold text-center mb-6">
        Your investing strategy
      </p>

      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend text-base font-semibold mb-1">
          Stocks / ETFs Investment yearly
        </legend>
        <input
          type="number"
          min="0"
          className="input input-bordered w-full"
          placeholder="100,000"
          value={inputs.stockYearly}
          onChange={(e) => handleInputChange("stockYearly", e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        <div className="flex items-center gap-5 min-w-0 ml-100">
          <p className="text-base ">Growth rate</p>
          <input
            type="number"
            step="0.1"
            className="input input-bordered input-sm w-20 join-item text-right"
            value={inputs.stockReturn}
            onChange={(e) => handleInputChange("stockReturn", e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </fieldset>
      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend text-base font-semibold mb-1">
          MMF / Bonds Investment yearly
        </legend>
        <input
          type="number"
          min="0"
          className="input input-bordered w-full"
          value={inputs.bondYearly}
          placeholder="100,000"
          onChange={(e) => handleInputChange("bondYearly", e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        <div className="flex items-center gap-5 min-w-0 ml-100">
          <p className="text-base ">Growth rate</p>
          <input
            type="number"
            step="0.1"
            className="input input-bordered input-sm w-20 join-item text-right"
            value={inputs.bondReturn}
            onChange={(e) => handleInputChange("bondReturn", e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </fieldset>
      <fieldset className="fieldset mb-2">
        <legend className="fieldset-legend text-base font-semibold mb-1">
          Cash / Savings yearly
        </legend>
        <input
          type="number"
          min="0"
          className="input input-bordered w-full"
          value={inputs.cashYearly}
          placeholder="100,000"
          onChange={(e) => handleInputChange("cashYearly", e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        <div className="flex items-center gap-5 min-w-0 ml-100">
          <p className="text-base ">Growth rate</p>
          <input
            type="number"
            step="0.1"
            className="input input-bordered input-sm w-20 join-item text-right"
            value={inputs.cashReturn}
            onChange={(e) => handleInputChange("cashReturn", e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <div className="divider mt-3 ">
          <p className="text-base font-light">
            I don't have investing strategy 😫
          </p>
        </div>
        <details
          className="collapse bg-base-100 border border-base-300"
          ref={investorRef}
        >
          <summary
            className=" text-center font-bold btn flex"
            onClick={onScrollToInvestor}
          >
            Three investors' strategies for you to choose ⬇️
          </summary>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={Warren_Buffett}
                alt="Warren Buffett"
                className="w-full rounded-xl"
              />

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle btn-xs">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle btn-xs">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={Ray_Dalio}
                alt="Ray Dalio"
                className="w-full rounded-xl"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle btn-xs">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle btn-xs">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={Peter_Lynch}
                alt="Peter Lynch"
                className="w-full rounded-xl"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle btn-xs ">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle btn-xs">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </details>
      </fieldset>
    </div>
  );
}
export default StrategyCard;
