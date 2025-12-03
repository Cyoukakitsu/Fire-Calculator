import { useState } from "react";
import Warren_Buffett from "./photo/Warren_Buffett.png";
import Ray_Dalio from "./photo/Ray_Dalio.png";
import Peter_Lynch from "./photo/Peter_Lynch.png";
function Home() {
  const [AnnualExpensesChange, setAnnualExpensesChange] = useState(3);

  function handleChange(event) {
    setAnnualExpensesChange(Number(event.target.value));
  }

  return (
    <div className="bg-base-200 min-h-screen w-full flex flex-col items-center overflow-y-auto py-4">
      <div className="text-center max-w-4xl mb-8">
        <p className="font-semibold text-4xl mb-4">What is FIRE calculator ?</p>

        <p className="text-xl mx-30 font-thin">
          FIRE stands for Financial Independence, Retire Early. Our calculator
          can help you create an investment and savings plan that may allow you
          to retire years earlier than usual, joining the growing community of
          people pursuing early retirement.
        </p>
      </div>
      <div className="flex justify-center gap-10 flex-wrap items-start w-full px-4 mb-10">
        {/*  左侧 ：卡片 1 */}
        <div className="flex flex-col w-full max-w-[450px]">
          <div className="bg-base-100 p-8 rounded-xl mt-10 w-full shadow-sm ">
            <p className="text-2xl  font-bold text-center mb-6">
              Your Situation
            </p>

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
            <p className="text-2xl font-bold text-center mb-6">
              Your retirement
            </p>
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
        <div className="bg-base-100 p-8 pt-1 rounded-xl mt-10 w-full max-w-[450px] shadow-sm">
          <p className="text-2xl font-bold text-center mb-6">
            Your investing strategy
          </p>

          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Stocks / ETFs Investment monthly
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="50,000"
            />
            <div className="flex items-center gap-5 min-w-0 ">
              <p className="text-base ">Growth rate</p>
              <input
                type="text"
                placeholder="5%"
                className="input min-w-0 w-70"
              />
            </div>
          </fieldset>
          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              MMF / Bonds Investment monthly
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="50,000"
            />
            <div className="flex items-center gap-5 min-w-0">
              <p className="text-base ">Growth rate</p>
              <input
                type="text"
                placeholder="5%"
                className="input min-w-0 w-70"
              />
            </div>
          </fieldset>
          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend text-base font-semibold mb-2">
              Cash / Savings monthly
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="50,000"
            />
            <div className="flex items-center gap-5 min-w-0">
              <p className="text-base ">Growth rate</p>
              <input
                type="text"
                placeholder="5%"
                className="input min-w-0 w-70"
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
      <button className="btn btn-neutral w-80 btn-outline mb-10 text-lg">
        Analyze
      </button>

      {/* 结果显示 */}
      <div>
        {/* 头部：自由之路 */}
        <div className="text-center">
          <p className="font-semibold text-4xl mb-1">Your FreeDom Path</p>
          <p className="text-xl mx-30 font-thin">
            💸 Financial projection based on current strategy
          </p>
        </div>
        {/* 核心区：年龄 金额等 */}
        {/* 视觉图表区 */}
        {/* 复利 */}
      </div>
    </div>
  );
}

export default Home;
