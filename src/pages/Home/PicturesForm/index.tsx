import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const PicturesForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>PicturesForm</div>;
};

export default PicturesForm;
