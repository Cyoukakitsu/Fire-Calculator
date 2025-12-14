import { useFireCalculator } from "./hooks/useFireCalculator";
import { usePageScroll } from "./hooks/usePageScroll";

import SituationCard from "./components/SituationCard";
import StrategyCard from "./components/StrategyCard";
import ResultSection from "./components/ResultSection";

function Home() {
  const { inputs, handleInputChange, result, handleAnalyze } =
    useFireCalculator();

  const { refs, handlers } = usePageScroll(result);

  return (
    <div className="bg-base-200 min-h-screen w-full flex flex-col items-center overflow-y-auto py-4">
      <div className="text-center max-w-8xl mb-5 px-4">
        <div className="font-semibold text-4xl md:text-6xl mb-4">
          FIRE calculator
          <p className="text-xl md:text-4xl mt-4">Find your Free Path</p>
        </div>

        {/* 📱 修复：mx-30 在手机上会把字挤没。改为 max-w 控制宽度 + mx-auto 居中 */}
        <p className="text-xl max-w-3xl mx-auto px-6 font-thin">
          FIRE stands for Financial Independence, Retire Early. Our calculator
          can help you create an investment and savings plan that may allow you
          to retire years earlier than usual, joining the growing community of
          people pursuing early retirement.
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap items-start w-full px-4 mb-10">
        {/* 左侧 ：卡片 1 */}
        <SituationCard
          inputs={inputs}
          handleInputChange={handleInputChange}
          fireModelsRef={refs.fireModelsRef}
          onScrollToModels={handlers.handleScrollToModels}
        />

        {/* 右侧：卡片 2 */}
        <StrategyCard
          inputs={inputs}
          handleInputChange={handleInputChange}
          investorRef={refs.investorRef}
          // ⚠️ 注意：这里建议统一用复数 Investors，确保和你 StrategyCard 里接收的名字一致
          onScrollToInvestors={handlers.handleScrollToInvestors}
        />
      </div>

      {/* 中间：按钮 */}
      <button
        className="btn btn-neutral w-11/12 md:w-80 btn-outline mb-10 text-lg "
        onClick={handleAnalyze}
      >
        Analyze
      </button>

      {/* 结果区 */}
      <ResultSection
        result={result}
        resultRef={refs.resultRef}
        inputs={inputs}
      />
    </div>
  );
}

export default Home;
