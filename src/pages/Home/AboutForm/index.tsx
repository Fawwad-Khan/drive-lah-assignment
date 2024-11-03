import { useEffect } from "react";

type Props = {
  extractFields: (data: unknown) => void;
};

const AboutForm = ({ extractFields }: Props) => {
  useEffect(() => {
    return () => {
      extractFields({});
    };
  }, []);

  return <div>AboutForm</div>;
};

export default AboutForm;
