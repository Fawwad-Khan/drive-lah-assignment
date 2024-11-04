import { useEffect, useState } from "react";

type Props = {
  bindData: (data: () => unknown) => void;
};

export const useDeviceForm = ({ bindData }: Props) => {
  const [devices, setDevices] = useState<
    {
      bringingOwnDevice: boolean;
      type?: string;
      serial?: string;
      image?: File;
    }[]
  >([
    {
      bringingOwnDevice: false,
      type: undefined,
      serial: undefined,
      image: undefined,
    },
  ]);

  useEffect(() => {
    bindData(() => ({ devices }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices]);

  const onAddDevice = () => {
    setDevices((prev) => [
      ...prev,
      {
        bringingOwnDevice: false,
        serial: undefined,
        image: undefined,
        type: undefined,
      },
    ]);
  };

  const handleToggleChange = (index: number, isOn: boolean) => {
    setDevices((prev) => {
      const newDevices = [...prev];
      newDevices[index] = { ...newDevices[index], bringingOwnDevice: isOn };
      return newDevices;
    });
  };

  const handleFileChange = (index: number, file: File) => {
    setDevices((prev) => {
      const newDevices = [...prev];
      newDevices[index] = { ...newDevices[index], image: file };
      return newDevices;
    });
  };

  const handleSerialChange = (index: number, serial: string) => {
    setDevices((prev) => {
      const newDevices = [...prev];
      newDevices[index] = { ...newDevices[index], serial };
      return newDevices;
    });
  };

  const handleTypeChange = (index: number, type: string) => {
    setDevices((prev) => {
      const newDevices = [...prev];
      newDevices[index] = { ...newDevices[index], type };
      return newDevices;
    });
  };

  return {
    devices,
    onAddDevice,
    handleToggleChange,
    handleFileChange,
    handleSerialChange,
    handleTypeChange,
  };
};
