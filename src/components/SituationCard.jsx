// import { useState } from 'react';
function ResultSection(
  inputs,
  handleInputChange,
  fireModelsRef,
  onScrollToModels
) {
  return (
    <div className="flex flex-col w-full max-w-[650px]">
      <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
        <p className="text-4xl font-bold text-center mb-6">Your Situation</p>
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
            onChange={(e) => handleInputChange("currentAge", e.target.value)}
            onWheel={(e) => e.target.blur()}
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
            onWheel={(e) => e.target.blur()}
          />
        </div>
      </div>
      <div className="bg-base-100 p-8 pb-4 rounded-xl mt-10 w-full shadow-sm">
        <p className="text-4xl font-bold text-center mb-6">Your retirement</p>
        {/* Target Age */}
        <div className="flex flex-row items-center gap-4 mb-4">
          <label className="text-xl font-semibold w-32 whitespace-nowrap">
            Post-FIRE Annual Spending
          </label>
          <input
            type="number"
            min="0"
            className="input input-bordered w-80 ml-auto"
            value={inputs.annualSpending}
            onChange={(e) =>
              handleInputChange("annualSpending", e.target.value)
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Annual Inflation - 水平布局（滑块部分需特殊处理） */}
        <div className="flex flex-row items-center gap-4 mb-2">
          <label className="text-xl font-semibold w-32 whitespace-nowrap">
            Annual Inflation({inputs.inflationRate}%)
          </label>
          <input
            type="range"
            min={0}
            max="100"
            className="range range-neutral ml-auto"
            value={inputs.inflationRate}
            onChange={(e) => {
              handleInputChange("inflationRate", e.target.value);
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Life Modren */}

        <fieldset className="fieldset">
          <div className="divider mt-14 ">
            <p className="text-base font-light">
              I don't know how much I'll spend after FIRE 😫
            </p>
          </div>
          <details
            className="collapse bg-base-100 border border-base-300 "
            ref={fireModelsRef}
          >
            <summary
              className="collapse-title  font-bold btn  flex"
              onClick={onScrollToModels}
            >
              5 FIRE models for you to choose from ⬇️
            </summary>

            <details className="collapse bg-base-100 border border-base-300">
              <summary className="collapse-title font-semibold">
                1. Lean FIRE 🍜
                <p className="font-light">
                  A minimalist retirement achieved through extreme frugality and
                  very low living expenses. <br /> Approximate Annual Spending
                  (JPY): ~1.5 - 2.5 Million JPY
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
                  A luxurious, high-budget retirement with abundant spending and
                  lifestyle indulgences. <br />
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
  );
}
export default ResultSection;
