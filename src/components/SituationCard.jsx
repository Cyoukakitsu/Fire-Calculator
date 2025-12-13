function SituationCard({
  inputs,
  handleInputChange,
  fireModelsRef,
  onScrollToModels,
}) {
  return (
    <div className="flex flex-col w-full max-w-[650px]">
      <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
        <p className="text-4xl font-bold text-center mb-6">Your Situation</p>

        {/* Current Age */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <label className="text-xl font-semibold w-full md:w-32 whitespace-nowrap">
            Current Age
          </label>
          <input
            type="number"
            min="0"
            className="input input-bordered w-full md:w-80 ml-auto"
            placeholder="25"
            value={inputs.currentAge}
            onChange={(e) => handleInputChange("currentAge", e.target.value)}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Current Savings */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <label className="text-xl font-semibold w-full md:w-32 whitespace-nowrap">
            Current Savings
          </label>
          <input
            type="number"
            min="0"
            className="input input-bordered w-full md:w-80 ml-auto"
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

        {/* Target Age / Spending */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <label className="text-xl font-semibold whitespace-nowrap">
            Post-FIRE Annual Spending
          </label>
          <input
            type="number"
            min="0"
            className="input input-bordered w-full md:w-80 ml-auto"
            value={inputs.annualSpending}
            onChange={(e) =>
              handleInputChange("annualSpending", e.target.value)
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Annual Inflation - 修复了语法错误 */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
          <label className="text-xl font-semibold whitespace-nowrap">
            Annual Inflation({inputs.inflationRate}%)
          </label>
          <input
            type="range"
            min={0}
            max="10" // 注意：这里 max 是 10，如果你想允许更高通胀，记得改成 100
            // 修复：把 w-full md:w-80 移到了 className 里面
            className="range range-neutral w-full md:w-80 md:ml-auto"
            value={inputs.inflationRate}
            onChange={(e) => {
              handleInputChange("inflationRate", e.target.value);
            }}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Life Models */}
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
              className="collapse-title font-bold btn flex"
              onClick={onScrollToModels}
            >
              5 FIRE models for you to choose from ⬇️
            </summary>

            {/* Models Details ... */}
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
            {/* ... 其他 details 保持不变 ... */}
            <details
              className="collapse bg-base-100 border border-base-300"
              open
            >
              <summary className="collapse-title font-semibold">
                2. Fat FIRE 🍷
                <p className="font-light">
                  A luxurious, high-budget retirement...
                </p>
              </summary>
            </details>
            <details
              className="collapse bg-base-100 border border-base-300"
              open
            >
              <summary className="collapse-title font-semibold">
                3. Traditional / Regular FIRE 🏠
                <p className="font-light">The standard approach...</p>
              </summary>
            </details>
            <details
              className="collapse bg-base-100 border border-base-300"
              open
            >
              <summary className="collapse-title font-semibold">
                4. Barista FIRE ☕️
                <p className="font-light">Semi-retirement...</p>
              </summary>
            </details>
            <details
              className="collapse bg-base-100 border border-base-300"
              open
            >
              <summary className="collapse-title font-semibold">
                5. Coast FIRE 🏂
                <p className="font-light">Saving enough early...</p>
              </summary>
            </details>
          </details>
        </fieldset>
      </div>
    </div>
  );
}

export default SituationCard;
