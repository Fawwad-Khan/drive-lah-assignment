import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const PricingForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>PricingForm</div>;
};

export default PricingForm;
