import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const LocationForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>LocationForm</div>;
};

export default LocationForm;
