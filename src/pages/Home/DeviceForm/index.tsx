import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const DeviceForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>DeviceForm</div>;
};

export default DeviceForm;
