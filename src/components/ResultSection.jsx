// import { useState } from 'react';

function ResultSection({ result, resultRef }) {
  const formatMoney = (num) => "¥ " + Number(num).toLocaleString();

  if (!result) return null;

  return (
    <div
      className="flex flex-col items-center max-w-4xl w-full"
      ref={resultRef}
    >
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
              <p className="text-5xl font-bold"> {result.fireAge}years old</p>
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

      <div className="bg-base-100 p-8 rounded-xl mt-10 w-7xl shadow-sm ">
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
              <p>Principal:{formatMoney(result.principal)}</p>
            </div>
            <div className="flex items-center  gap-3">
              <div className="w-3 h-3 bg-gray-400"></div>
              <p>Interest:{formatMoney(result.interest)}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 card text-center ">
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
  );
}
export default ResultSection;
