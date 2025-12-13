function ResultSection({ result, inputs, resultRef }) {
  const formatMoney = (num) => "¥ " + Number(num).toLocaleString();

  if (!result) return null;

  return (
    <div
      className="flex flex-col items-center max-w-4xl w-full px-4 mb-10" // 添加 px-4 防止手机贴边
      ref={resultRef}
    >
      {/* 头部：自由之路 */}
      <div className="text-center mt-10">
        <p className="font-semibold text-3xl md:text-4xl mb-2">
          Your FIRE Path
        </p>
        {/* 修复：mx-30 在手机上会让文字消失，改为 max-w 并居中 */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-thin text-base-content/70">
          💸 Financial projection based on current strategy
        </p>
      </div>

      <div className="w-full">
        {/* 核心区：Result 卡片 */}
        <div className="bg-base-100 p-6 md:p-8 rounded-xl mt-6 w-full shadow-sm">
          <p className="text-2xl font-bold text-center mb-6">Result</p>

          {/* 响应式布局：手机竖排(col)，电脑横排(row) */}
          <div className="flex flex-col md:flex-row justify-between text-center gap-8 md:gap-0">
            <div>
              <p className="text-gray-400 mb-1">Fire Age</p>
              <p className="text-4xl md:text-5xl font-bold">
                {result.fireAge} <span className="text-2xl">years old</span>
              </p>
            </div>

            {/* 新增：显示 Inflation (如果 inputs 存在) */}
            {inputs && (
              <div>
                <p className="text-gray-400 mb-1">Inflation Used</p>
                <p className="text-4xl md:text-5xl font-bold text-accent">
                  {inputs.inflationRate}%
                </p>
              </div>
            )}

            <div>
              <p className="text-gray-400 mb-1">Target Number</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {formatMoney(result.targetNumber)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 视觉图表区 */}
      {/* 修复：w-7xl 是无效类，改用 w-full */}
      <div className="bg-base-100 p-6 md:p-8 rounded-xl mt-6 w-full shadow-sm">
        <p className="text-2xl font-bold text-center mb-6">
          How your money grows
        </p>

        <div className="p-2 md:p-4">
          <progress
            className="progress progress-primary w-full h-4"
            max="100"
            value={(result.principal / result.finalAssets) * 100}
          ></progress>

          {/* 图例：手机上允许换行 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-base-content rounded-full"></div>
              <p className="text-sm md:text-base">
                Principal:{" "}
                <span className="font-semibold">
                  {formatMoney(result.principal)}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <p className="text-sm md:text-base">
                Interest:{" "}
                <span className="font-semibold">
                  {formatMoney(result.interest)}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 资产明细 Grid：手机1列，电脑3列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="card-body bg-base-200/50 rounded-lg p-4 text-center">
            <span className="text-sm opacity-70">Stocks / ETFs</span>
            <p className="text-2xl md:text-3xl font-bold">
              {formatMoney(result.breakdown.stock)}
            </p>
          </div>
          <div className="card-body bg-base-200/50 rounded-lg p-4 text-center">
            <span className="text-sm opacity-70">Bonds / MMF</span>
            <p className="text-2xl md:text-3xl font-bold">
              {formatMoney(result.breakdown.bond)}
            </p>
          </div>
          <div className="card-body bg-base-200/50 rounded-lg p-4 text-center">
            <span className="text-sm opacity-70">Cash / Savings</span>
            <p className="text-2xl md:text-3xl font-bold">
              {formatMoney(result.breakdown.cash)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
