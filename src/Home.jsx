import { useState } from "react";

import Warren_Buffett from "./photo/Warren_Buffett.png";
import Ray_Dalio from "./photo/Ray_Dalio.png";
import Peter_Lynch from "./photo/Peter_Lynch.png";

import { calculateFireResult } from "/src/hooks/calculateFireResult.js";

function Home() {
  const [inputs, setInputs] = useState({
    currentAge: 25,
    currentSavings: 1000000,
    targetAge: 65,
    annualSpending: 2000000,
    inflationRate: 3,

    // --- 修改点：改为 Yearly，默认值相应变大 ---
    stockYearly: 600000, // 以前是月投5万，现在年投60万
    stockReturn: 7,
    bondYearly: 360000, // 3万 * 12
    bondReturn: 4,
    cashYearly: 240000, // 2万 * 12
    cashReturn: 1,
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value === "" ? "" : Number(value),
    }));
  };

  const formatMoney = (num) => "¥ " + Number(num).toLocaleString();

  const handleAnalyze = () => {
    const calculatedResult = calculateFireResult(inputs);
    setResult(calculatedResult);
  };

  return (
    <div className="bg-base-200 min-h-screen w-full flex flex-col items-center overflow-y-auto py-4">
      <div className="text-center max-w-8xl mb-5 ">
        <p className="font-semibold text-6xl mb-4">
          FIRE calculator
          <div className="text-4xl mt-4">Find your Free Path</div>
        </p>

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
                value={inputs.currentAge}
                onChange={(e) =>
                  handleInputChange("currentAge", e.target.value)
                }
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
                value={inputs.currentSavings}
                onChange={(e) =>
                  handleInputChange("currentSavings", e.target.value)
                }
              />
            </div>
          </div>

          {/* 左侧：卡片 2 - Your retirement */}
          <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
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
                value={inputs.targetAge}
                onChange={(e) => handleInputChange("targetAge", e.target.value)}
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
                value="40"
                className="range range-neutral ml-auto"
              />
            </div>

            {/* Life Modren */}

            <fieldset className="fieldset">
              <div className="divider mt-3 ">
                <p className="text-base font-semibold">
                  I'm not sure about my spending after FIRE 😫
                </p>
              </div>
              <details
                class="collapse bg-base-100 border border-base-300"
                name="my-accordion-det-1"
                open
              >
                <summary class="collapse-title text-center font-bold">
                  5 FIRE models for you to choose from ⬇️
                </summary>

                <details
                  class="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary class="collapse-title font-semibold">
                    1. Lean FIRE 🍜One-sentence introduction: A minimalist
                    lifestyle focused on extreme frugality and keeping basic
                    living expenses very low to achieve retirement quickly.
                    Approximate Annual Spending (JPY): ~1.5 - 2.5 Million JPY
                  </summary>
                </details>
                <details
                  class="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary class="collapse-title font-semibold">
                    2. Fat FIRE 🍷 One-sentence introduction: A luxurious
                    retirement lifestyle with a high budget, allowing for
                    abundant spending and travel without compromising quality of
                    life. Approximate Annual Spending (JPY): 10 Million JPY+
                  </summary>
                </details>
                <details
                  class="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary class="collapse-title font-semibold">
                    3. Traditional / Regular FIRE 🏠 One-sentence introduction:
                    The classic approach aiming for a comfortable, average
                    middle-class retirement lifestyle that maintains one's
                    pre-retirement standard of living. Approximate Annual
                    Spending (JPY): ~4 - 6 Million JPY
                  </summary>
                </details>
                <details
                  class="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary class="collapse-title font-semibold">
                    4. Barista FIRE ☕️ One-sentence introduction: A
                    semi-retirement strategy involving switching from
                    high-stress careers to low-stress part-time work to cover
                    current living expenses, letting existing investments grow
                    in the background. Approximate Annual Spending (JPY): ~3 - 5
                    Million JPY (Note: A portion of this is covered by part-time
                    income.)
                  </summary>
                </details>
                <details
                  class="collapse bg-base-100 border border-base-300"
                  name="my-accordion-det-1"
                  open
                >
                  <summary class="collapse-title font-semibold">
                    5. Coast FIRE 🏂 One-sentence introduction: Achieving a
                    savings milestone early in life where compound interest
                    alone will guarantee future retirement funding, allowing one
                    to stop saving entirely and spend their full current income.
                    Approximate Annual Spending (JPY): Varies based on current
                    income (e.g., 4 - 8 Million JPY+), as the defining
                    characteristic is spending one's full salary without needing
                    to save further.
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

          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend text-base font-semibold mb-1">
              Stocks / ETFs Investment yearly
            </legend>
            <input
              type="number"
              min="0"
              className="input input-bordered w-full"
              placeholder="600,000"
              value={inputs.stockYearly}
              onChange={(e) => handleInputChange("stockYearly", e.target.value)}
            />
            <div className="flex items-center gap-5 min-w-0 ">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
                value={inputs.stockReturn}
                onChange={(e) =>
                  handleInputChange("stockReturn", e.target.value)
                }
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
              value={inputs.bondYearly}
              onChange={(e) => handleInputChange("bondYearly", e.target.value)}
            />
            <div className="flex items-center gap-5 min-w-0">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
                value={inputs.bondReturn}
                onChange={(e) =>
                  handleInputChange("bondReturn", e.target.value)
                }
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
              value={inputs.cashYearly}
              onChange={(e) => handleInputChange("cashYearly", e.target.value)}
            />
            <div className="flex items-center gap-5 min-w-0">
              <p className="text-base ">Growth rate</p>
              <input
                type="number"
                step="0.1"
                className="input input-bordered input-sm w-20 join-item text-right"
                value={inputs.cashReturn}
                onChange={(e) =>
                  handleInputChange("cashReturn", e.target.value)
                }
              />
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="divider mt-3 ">
              <p className="text-base font-semibold">
                I don't have investing strategy 😫
              </p>
            </div>
            <details
              class="collapse bg-base-100 border border-base-300"
              name="my-accordion-det-1"
              open
            >
              <summary class="collapse-title text-center font-bold">
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
      <button
        className="btn btn-neutral w-80 btn-outline mb-10 text-lg"
        onClick={handleAnalyze}
      >
        Analyze
      </button>

      {/* 结果显示 */}
      {result && (
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
                  <p className="text-5xl font-bold">
                    {result.fireAge} years old
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Target Number</p>
                  <p className="text-5xl font-bold">
                    {formatMoney(result.targetNumber)}
                  </p>
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
              <progress
                className="progress w-full"
                max="100"
                value={(result.principal / result.finalAssets) * 100}
              ></progress>
              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-base-content"></div>
                  <p>Principal: {formatMoney(result.principal)}</p>
                </div>
                <div className="flex items-center  gap-3">
                  <div className="w-3 h-3 bg-gray-400"></div>
                  <p>Interest: {formatMoney(result.interest)}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 card text-center ">
              <div className="card-body bg-base-300  ">
                Stocks / ETFs Investment
                <p className="text-4xl font-bold">
                  {formatMoney(result.breakdown.stock)}
                </p>
              </div>
              <div className="card-body bg-base-300">
                MMF / Bonds Investment
                <p className="text-4xl font-bold">
                  {formatMoney(result.breakdown.bond)}
                </p>
              </div>
              <div className="card-body bg-base-300">
                Cash / Savings
                <p className="text-4xl font-bold">
                  {formatMoney(result.breakdown.cash)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
