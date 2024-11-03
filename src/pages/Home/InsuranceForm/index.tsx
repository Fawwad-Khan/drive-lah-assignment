import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const InsuranceForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>InsuranceForm</div>;
};

export default InsuranceForm;
