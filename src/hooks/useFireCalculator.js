export const useFireCalculator = (inputs) => {
  // 1. 数据清洗：确保所有输入都是数字，防止计算错误
  const safeInputs = {};
  for (let key in inputs) {
    safeInputs[key] = inputs[key] || 0;
  }

  let {
    currentAge,
    currentSavings,
    targetAge,
    annualSpending,
    inflationRate,
    stockMonthly,
    stockReturn,
    bondMonthly,
    bondReturn,
    cashMonthly,
    cashReturn,
  } = safeInputs;

  // 2. 准备基础参数
  const swr = 0.04; // 4% 安全提款率
  let fireNumber = annualSpending / swr; // 初始目标金额
};
