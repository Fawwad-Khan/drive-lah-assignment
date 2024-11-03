import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const FeaturesForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>FeaturesForm</div>;
};

export default FeaturesForm;
