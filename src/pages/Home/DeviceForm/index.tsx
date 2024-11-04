import { useEffect, useState } from "react";

import PillToggle from "../../../components/UIComponents/PillToggle";

import styles from "./styles.module.scss";
import Button from "../../../components/UIComponents/Button";
import FileUpload from "../../../components/UIComponents/FileUpload";

type Props = {
  bindData: (data: () => unknown) => void;
};

const DeviceForm: React.FC<Props> = ({ bindData }) => {
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

  return (
    <>
      <div className="py-4 pb-2">
        <h2>Device management </h2>
        <p>
          Add details of the device, if any already installed on your car. If
          none, then continue to next step.{" "}
        </p>
      </div>
      {devices.map((device, index) => (
        <div className="my-4">
          <h4 className="mb-4">Device {index + 1}</h4>
          <div className="row">
            <div className="col-md-6 pb-2">
              <label className="pb-2 text-black">Device Type</label>

              <input
                type="text"
                className="inputText"
                name="deviceType"
                onChange={(e) => handleTypeChange(index, e.target.value)}
              />
            </div>

            <div className="col-md-6 pb-3 ">
              <div className="row">
                <div className="col-lg-10 mb-2">
                  <h5 className="pb-2 text-black">
                    Bringing your own device?{" "}
                  </h5>
                </div>
                <div className="col-lg-2">
                  <PillToggle
                    onToggle={(isOn) => handleToggleChange(index, isOn)}
                  />
                </div>
                <div className="col-12">
                  Toggle this on if you're bringing your own device. Leave it
                  off if Drive mate is to provide the device.
                </div>
              </div>
            </div>

            <div
              className={`${styles.transition} col-12 ${
                device.bringingOwnDevice ? styles.active : ""
              }`}
            >
              <div className="row">
                <div className="col-md-6">
                  <label className="pb-2 text-black">Serial Number</label>

                  <input
                    type="text"
                    className="inputText"
                    name="deviceType"
                    placeholder="Enter the serial number of the device"
                    onChange={(e) => handleSerialChange(index, e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="pb-2 text-black">
                    Upload an Image of the device
                  </label>

                  <FileUpload
                    onChooseFile={(file) => handleFileChange(index, file)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="my-4">
        <Button type="Button" onClick={onAddDevice}>
          Add another device
        </Button>{" "}
      </div>
    </>
  );
};

export default DeviceForm;
