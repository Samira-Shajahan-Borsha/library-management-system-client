import type { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

type SpinnerProps = {
  isLoading: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <BeatLoader
        loading={isLoading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
