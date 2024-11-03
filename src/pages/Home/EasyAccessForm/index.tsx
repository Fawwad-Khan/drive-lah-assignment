import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const EasyAccessForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>EasyAccessForm</div>;
};

export default EasyAccessForm;
