import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const PromotionForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>PromotionForm</div>;
};

export default PromotionForm;
