import PillToggle from "../../../components/UIComponents/PillToggle";

import styles from "./styles.module.scss";
import Button from "../../../components/UIComponents/Button";
import FileUpload from "../../../components/UIComponents/FileUpload";
import { useDeviceForm } from "./useDeviceForm";

const DeviceForm: React.FC = () => {
  const {
    devices,
    handleToggleChange,
    handleFileChange,
    handleSerialChange,
    onAddDevice,
    handleTypeChange,
  } = useDeviceForm();

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
        <div className="my-4" key={index}>
          <h4 className="mb-4">Device {index + 1}</h4>
          <div className="row">
            <div className="col-md-6 pb-2">
              <label className="pb-2 text-black">Device Type</label>

              <input
                type="text"
                className="inputText"
                name="deviceType"
                data-test-id={`device-type-input-${index}`}
                onChange={(e) => handleTypeChange(index, e.target.value)}
                value={device.type}
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
                    isOn={device.bringingOwnDevice}
                    data-test-id={`device-toggle-${index}`}
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
                    name="deviceSerial"
                    data-test-id={`device-serial-input-${index}`}
                    placeholder="Enter the serial number of the device"
                    value={device.serial}
                    onChange={(e) => handleSerialChange(index, e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="pb-2 text-black">
                    Upload an Image of the device
                  </label>

                  <FileUpload
                    onChooseFile={(file) => handleFileChange(index, file)}
                    value={device.image}
                    data-test-id={`device-image-upload-${index}`}
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
