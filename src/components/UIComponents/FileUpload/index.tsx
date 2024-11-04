import styles from "./FileUpload.module.scss";

type Props = {
  onChooseFile: (file: File) => void;
  value?: {
    name: string;
    size: number;
    type: string;
  };
  ["data-test-id"]?: string;
};

const FileUpload: React.FC<Props> = ({
  onChooseFile,
  value,
  ["data-test-id"]: dataTestId,
}) => {
  return (
    <div className="pb-4">
      <label role="label" className={styles.fileUploadBox} htmlFor="file">
        {value ? <span>{value.name}</span> : <span>Click to upload</span>}
      </label>
      <input
        className="d-none"
        type="file"
        id="file"
        data-test-id={dataTestId}
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) {
            return;
          }

          onChooseFile(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default FileUpload;
