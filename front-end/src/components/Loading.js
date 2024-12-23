import { ProgressSpinner } from "primereact/progressspinner";
import "./index.css";

const Loading = ({ show }) => {
  return show ? (
    <div className="loading-container">
      <ProgressSpinner />
    </div>
  ) : null;
};

export default Loading;
