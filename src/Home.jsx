// import { useState } from "react";

import Warren_Buffett from "./photo/Warren_Buffett.png";
import Ray_Dalio from "./photo/Ray_Dalio.png";
import Peter_Lynch from "./photo/Peter_Lynch.png";

function Home() {
  return (
    <div className="bg-base-200 min-h-screen w-full flex flex-col items-center overflow-y-auto py-4">
      <div className="text-center max-w-8xl mb-5 ">
        <div className="font-semibold text-6xl mb-4">
          FIRE calculator
          <p className="text-4xl mt-4">Find your Free Path</p>
        </div>

        <p className="text-xl mx-30 font-thin">
          FIRE stands for Financial Independence, Retire Early. Our calculator
          can help you create an investment and savings plan that may allow you
          to retire years earlier than usual, joining the growing community of
          people pursuing early retirement.
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap items-start w-full px-4 mb-10">
        {/*  左侧 ：卡片 1 */}
        <div className="flex flex-col w-full max-w-[650px]  ">
          {/* Your Situation */}
          <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
            <p className="text-4xl font-bold text-center mb-6">
              Your Situation
            </p>
            {/* Current Age */}
            <div className="flex flex-row items-center  gap-4 mb-4">
              <label className="text-xl font-semibold w-32 whitespace-nowrap">
                Current Age
              </label>
              <input
                type="number"
                min="0"
                className="input input-bordered w-80 ml-auto"
                placeholder="25"
              />
            </div>

            {/* Current Savings  */}
            <div className="flex flex-row items-center gap-4 mb-4">
              <label className="text-xl font-semibold w-32 whitespace-nowrap">
                Current Savings
              </label>
              <input
                type="number"
                min="0"
                className="input input-bordered w-80 ml-auto"
                placeholder="1,000,000"
              />
            </div>
          </div>

          {/* 左侧：卡片 2 - Your retirement */}
          <div className="bg-base-100 p-8 pb-4 rounded-xl mt-10 w-full shadow-sm">
            <p className="text-4xl font-bold text-center mb-6">
              Your retirement
            </p>
            {/* Target Age */}
            <div className="flex flex-row items-center gap-4 mb-4">
              <label className="text-xl font-semibold w-32 whitespace-nowrap">
                Post-FIRE Annual Spending
              </label>
              <input
                type="number"
                min="0"
                className="input input-bordered w-80 ml-auto"
              />
            </div>

            {/* Annual Inflation - 水平布局（滑块部分需特殊处理） */}
            <div className="flex flex-row items-center gap-4 mb-2">
              <label className="text-xl font-semibold w-32 whitespace-nowrap">
                Annual Inflation
              </label>
              <input
                type="range"
                min={0}
                max="100"
                className="range range-neutral ml-auto"
              />
            </div>

            {/* Life Modren */}

            <fieldset className="fieldset">
              <div className="divider mt-14 ">
                <p className="text-base font-light"></p>
              </div>
              <details
                className="collapse bg-base-100 border border-base-300 "
                open
              >
                <summary className="collapse-title  font-bold btn  flex">
                  5 FIRE models for you to choose from ⬇️
                </summary>

                <details className="collapse bg-base-100 border border-base-300">
                  <summary className="collapse-title font-semibold">
                    1. Lean FIRE 🍜
                    <p className="font-light">
                      A minimalist retirement achieved through extreme frugality
                      and very low living expenses. <br /> Approximate Annual
                      Spending (JPY): ~1.5 - 2.5 Million JPY
                    </p>
                  </summary>
                </details>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    2. Fat FIRE 🍷
                    <p className="font-light">
                      A luxurious, high-budget retirement with abundant spending
                      and lifestyle indulgences. <br />
                      Approximate Annual Spending (JPY): 10 Million JPY+
                    </p>
                  </summary>
                </details>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    3. Traditional / Regular FIRE 🏠
                    <p className="font-light">
                      The standard approach aiming for a comfortable, average
                      middle-class retirement lifestyle.
                      <br />
                      Approximate Annual Spending (JPY): ~4 - 6 Million JPY
                    </p>
                  </summary>
                </details>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    4. Barista FIRE ☕️
                    <p className="font-light">
                      Semi-retirement using low-stress part-time income to cover
                      current expenses while letting investments grow.
                      <br />
                      Approximate Annual Spending (JPY): ~3 - 5 Million JPY
                    </p>
                  </summary>
                </details>
                <details
                  className="collapse bg-base-100 border border-base-300"
                  open
                >
                  <summary className="collapse-title font-semibold">
                    5. Coast FIRE 🏂 <br />
                    <p className="font-light">
                      Saving enough early for compound interest to cover future
                      retirement, allowing you to stop saving now and spend your
                      full income.
                      <br />
                      Approximate Annual Spending (JPY): 4 - 8 Million JPY+
                    </p>
                  </summary>
                </details>
              </details>
            </fieldset>
          </div>
        </div>

        {/*  右侧：卡片 3 */}
        <div className="bg-base-100 p-8 pt-8 pb-4 rounded-xl mt-10 w-full max-w-[650px] shadow-sm">
          <p className="text-4xl font-bold text-center mb-6">
            Your investing strategy
          </p>

          {/* <div className="flex flex-row items-center gap-4 mb-4">
              <label className="text-xl font-semibold w-32 whitespace-nowrap">
                Current Savings
              </label>
              <input
                type="number"
                min="0"
                className="input input-bordered w-80 ml-auto" */}

          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend text-base font-semibold mb-1">
              Stocks / ETFs Investment yearly
            </legend>
            <input
              type="number"
              min="0"
              className="input input-bordered w-full"
              placeholder="600,000"
            />
            <div className="flex items-center gap-5 min-w-0 ml-100">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
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
              // --- 修改 value 绑定 ---
            />
            <div className="flex items-center gap-5 min-w-0 ml-100">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
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
              // --- 修改 value 绑定 ---
            />
            <div className="flex items-center gap-5 min-w-0 ml-100">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
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
              open
            >
              <summary className=" text-center font-bold btn flex">
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
      </div>

      {/* 中间：按钮 */}
      <button className="btn btn-neutral w-80 btn-outline mb-10 text-lg">
        Analyze
      </button>

      {/* 结果显示 */}

      <div className="flex flex-col items-center max-w-4xl w-full">
        {/* 头部：自由之路 */}
        <div className="text-center">
          <p className="font-semibold text-4xl mb-1">Your FIRE Path</p>
          <p className="text-xl mx-30 font-thin">
            💸 Financial projection based on current strategy
          </p>
        </div>
        <div className="w-full  px-4">
          {/* 核心区：年龄 金额等 */}
          <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
            <p className="text-2xl font-bold text-center mb-6">Result</p>
            <div className="flex justify-between text-center">
              <div>
                <p className="text-gray-400">Fire Age</p>
                <p className="text-5xl font-bold"> years old</p>
              </div>
              <div>
                <p className="text-gray-400">Target Number</p>
                <p className="text-5xl font-bold"></p>
              </div>
            </div>
          </div>
        </div>
        {/* 视觉图表区 */
        /* 作为version2的时候添加 */}

        <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm ">
          <p className="text-2xl font-bold text-center mb-6">
            How your money grows
          </p>
          <div className="p-4">
            <progress className="progress w-full" max="100"></progress>
            <div className="flex items-center justify-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-base-content"></div>
                <p>Principal:</p>
              </div>
              <div className="flex items-center  gap-3">
                <div className="w-3 h-3 bg-gray-400"></div>
                <p>Interest:</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 card text-center ">
            <div className="card-body bg-base-300  ">
              Stocks / ETFs Investment
              <p className="text-4xl font-bold"></p>
            </div>
            <div className="card-body bg-base-300">
              MMF / Bonds Investment
              <p className="text-4xl font-bold"></p>
            </div>
            <div className="card-body bg-base-300">
              Cash / Savings
              <p className="text-4xl font-bold"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
