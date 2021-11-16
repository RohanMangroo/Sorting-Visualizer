import Controls from './Controls';
import Bars from './Bars';
import StartButton from './StartButton';
import Metrics from './Metrics';
import AlgoDescription from './AlgoDescription';

export default function SortingPage() {
  return (
    <div className="page">
      <div className="page-top">
        <div className="page-top-left">
          <AlgoDescription />
        </div>
        <div className="page-top-right">
          <Bars />
        </div>
      </div>
      <div className="page-bottom">
        <div className="page-bottom-left">
          <Controls />
        </div>
        <div className="page-bottom-mid">
          <StartButton />
        </div>
        <div className="page-bottom-right">
          <Metrics />
        </div>
      </div>
    </div>
  );
}
