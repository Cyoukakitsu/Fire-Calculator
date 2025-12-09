export const calculateFireResult = (inputs) => {
  // 1. 数据清洗
  const safeInputs = {};
  for (let key in inputs) {
    safeInputs[key] = Number(inputs[key]) || 0; // 确保转为数字
  }

  let {
    currentAge, //当前年龄
    currentSavings, //当前存款
    targetAge, //预测上限年龄
    annualSpending, //年度消费
    inflationRate, //通货膨胀
    stockYearly, //股票年投资额
    stockReturn, //股票预期收益率
    bondYearly, //债券年投资额
    bondReturn, //债券预期收益率
    cashYearly, //现金年投资额
    cashReturn, //现金预期收益率
  } = safeInputs;

  // 2. 准备基础参数
  const swr = 0.04; //安全提款率
  let fireNumber = annualSpending / swr; //FIRE 目标金额计算公式： 年支出 / 0.04 = 年支出 x 25

  // 3. 现有资产分配 (初始化) ?
  const totalYearly = stockYearly + bondYearly + cashYearly || 1;

  let stockBal = (stockYearly / totalYearly) * currentSavings;
  let bondBal = (bondYearly / totalYearly) * currentSavings;
  let cashBal = (cashYearly / totalYearly) * currentSavings;

  let age = currentAge;
  let totalPrincipal = currentSavings; // 初始本金

  // --- 循环开始 ---
  while (age < targetAge) {
    // 1. 检查是否达成目标
    const totalAssets = stockBal + bondBal + cashBal;

    // 如果资产达标，提前退出循环
    if (totalAssets >= fireNumber) break;

    // 2. 年龄 + 1
    age++;

    // 复利计算
    // 新余额 = 旧余额 * (1 + 收益率) + 本年新投入
    stockBal = stockBal * (1 + stockReturn / 100) + stockYearly;
    bondBal = bondBal * (1 + bondReturn / 100) + bondYearly;
    cashBal = cashBal * (1 + cashReturn / 100) + cashYearly;

    // 4. 累加总投入本金 (不包含利息)
    totalPrincipal += stockYearly + bondYearly + cashYearly;

    // 5. 通货膨胀调整
    // 你的目标金额不是固定的！因为物价在涨，FIRE 门槛也在涨。
    fireNumber = fireNumber * (1 + inflationRate / 100);
  }
  // --- 循环结束 (这里是你漏掉的括号) ---

  // 3. 计算最终结果 (在循环外面计算)
  const finalAssets = stockBal + bondBal + cashBal;

  return {
    fireAge: age,
    targetNumber: Math.round(fireNumber),
    finalAssets: Math.round(finalAssets),
    principal: Math.round(totalPrincipal),
    interest: Math.round(finalAssets - totalPrincipal),
    breakdown: {
      stock: Math.round(stockBal),
      bond: Math.round(bondBal),
      cash: Math.round(cashBal),
    },
  };
};
