import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {
        <StatisticsList>
          <li>
            <span>Good:</span>
            {good}
          </li>
          <li>
            <span>Neutral:</span> {neutral}
          </li>
          <li>
            <span>Bad:</span> {bad}
          </li>
          <li>
            <span>Total:</span> {total}
          </li>
          <li>
            <span>Positive feedback:</span> {positivePercentage}%
          </li>
        </StatisticsList>
      }
    </div>
  );
};
