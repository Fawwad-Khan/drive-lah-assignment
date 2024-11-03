import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const RulesForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>RulesForm</div>;
};

export default RulesForm;
