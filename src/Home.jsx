import { useState } from "react";

function Home() {
  const [AnnualExpensesChange, setAnnualExpensesChange] = useState(3);

  function handleChange(event) {
    setAnnualExpensesChange(Number(event.target.value));
  }

  return (
    <div className="bg-base-200 flex justify-center gap-10 min-h-screen w-full items-start overflow-y-auto py-4 flex-wrap">
      <div className="text-center">
        <p className="font-semibold text-4xl mb-4">What is FIRE calculator ?</p>

        <p className="text-xl mx-30 font-thin">
          FIRE stands for Financial Independence, Retire Early. Our calculator
          can help you create an investment and savings plan that may allow you
          to retire years earlier than usual, joining the growing community of
          people pursuing early retirement.
        </p>
      </div>

      {/*  左侧 ：卡片 1 */}
      <div className="flex flex-col w-full max-w-[450px]">
        <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm ">
          <p className="text-2xl  font-bold text-center mb-6">Your Situation</p>

          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Current Age
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="25"
            />
          </fieldset>

          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Current Savings
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="1,000,000"
            />
          </fieldset>
        </div>

        {/* 左侧 ：卡片 2 */}
        <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm">
          <p className="text-2xl font-bold text-center mb-6">Your retirement</p>
          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Projection mode
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="65"
            />
          </fieldset>
          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Annual spending
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="50000"
            />
          </fieldset>

          <fieldset className="fieldset mb-4">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Annual Expenses
            </legend>

            <div className="flex gap-9">
              <div className="text-base">{AnnualExpensesChange}%</div>

              <div className="w-full max-w-xs ">
                <input
                  type="range"
                  min={0}
                  max="10"
                  value={AnnualExpensesChange}
                  className="range"
                  step="1"
                  onChange={handleChange}
                />
                <div className="flex justify-between px-1 mt-2 text-xs">
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </div>
                <div className="flex justify-between px-1 mt-2 text-xs">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/*  右侧：卡片 3 */}
      <div className="bg-base-100 p-8 rounded-xl mt-10 w-full max-w-[450px] shadow-sm">
        <p className="text-2xl font-bold text-center mb-6">
          Your investing strategy
        </p>

        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend text-base font-semibold mb-2">
            Stocks / ETFs Investment monthly
          </legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="50,000"
          />
        </fieldset>
        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend text-base font-semibold mb-2">
            MMF / Bonds Investment monthly
          </legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="50,000"
          />
        </fieldset>
        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend text-base font-semibold mb-2">
            Cash / Savings monthly
          </legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="50,000"
          />
        </fieldset>
      </div>
    </div>
  );
}

export default Home;
