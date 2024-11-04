import { useAppDispatch, useAppSelector } from "../../../redux";
import { setDeviceFormState } from "../../../redux/DeviceForm/deviceForm.slice";

export const useDeviceForm = () => {
  const { devices } = useAppSelector((state) => state.deviceForm);
  const dispatch = useAppDispatch();

  const onAddDevice = () => {
    dispatch(
      setDeviceFormState({
        devices: [
          ...devices,
          {
            bringingOwnDevice: false,
            serial: undefined,
            image: undefined,
            type: undefined,
          },
        ],
      })
    );
  };

  const handleToggleChange = (index: number, isOn: boolean) => {
    const newDevices = [...devices];
    newDevices[index] = { ...newDevices[index], bringingOwnDevice: isOn };

    dispatch(
      setDeviceFormState({
        devices: newDevices,
      })
    );
  };

  const handleFileChange = async (index: number, file: File) => {
    const newDevices = [...devices];

    const toBase64 = (file: File) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });

    const base64File: string = (await toBase64(file)) as string;

    newDevices[index] = {
      ...newDevices[index],
      image: {
        name: file.name,
        size: file.size,
        type: file.type,
        base64: base64File,
      },
    };

    dispatch(
      setDeviceFormState({
        devices: newDevices,
      })
    );
  };

  const handleSerialChange = (index: number, serial: string) => {
    const newDevices = [...devices];
    newDevices[index] = { ...newDevices[index], serial };
    dispatch(setDeviceFormState({ devices: newDevices }));
  };

  const handleTypeChange = (index: number, type: string) => {
    const newDevices = [...devices];
    newDevices[index] = { ...newDevices[index], type };
    dispatch(setDeviceFormState({ devices: newDevices }));
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
