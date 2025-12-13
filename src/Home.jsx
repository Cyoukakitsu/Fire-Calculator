import { useState, useRef, useEffect } from "react";

import { calculateFireResult } from "./hooks/calculateFireResult";

import SituationCard from "./components/SituationCard";
import StrategyCard from "./components/StrategyCard";
import ResultSection from "./components/ResultSection";
function Home() {
  const [inputs, setInputs] = useState({
    //左侧卡片
    currentAge: "",
    currentSavings: "",
    annualSpending: "",
    inflationRate: 0,
    targetAge: 100,

    // 右侧：投资策略
    stockYearly: "",
    stockReturn: "",
    bondYearly: "",
    bondReturn: "",
    cashYearly: "",
    cashReturn: "",
  });

  const [result, setResult] = useState(null);

  const fireModelsRef = useRef(null); // 左边：FIRE 模式
  const investorRef = useRef(null); // 右边：大师策略
  const resultRef = useRef(null); // 底部：计算结果

  const handleScrollTomodels = () => {
    setTimeout(() => {
      if (fireModelsRef.current) {
        fireModelsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleScrollToInvestors = () => {
    setTimeout(() => {
      if (investorRef.current) {
        investorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [result]);

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value === "" ? "" : Number(value),
    }));
  };

  const handleAnalyze = () => {
    const calculatedResult = calculateFireResult(inputs);
    setResult(calculatedResult);
  };

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
        <SituationCard
          inputs={inputs}
          handleInputChange={handleInputChange}
          fireModelsRef={fireModelsRef}
          onScrollToModels={handleScrollTomodels}
        />

        {/*  右侧：卡片 3 */}
        <StrategyCard
          inputs={inputs}
          handleInputChange={handleInputChange}
          investorRef={investorRef}
          onScrollToInvestor={handleScrollToInvestors}
        />
      </div>

      {/* 中间：按钮 */}
      <button
        className="btn btn-neutral w-80 btn-outline mb-10 text-lg "
        onClick={handleAnalyze}
      >
        Analyze
      </button>

      <ResultSection result={result} resultRef={resultRef} />
    </div>
  );
}

export default Home;
