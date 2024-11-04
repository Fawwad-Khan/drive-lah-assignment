import styles from "./FileUpload.module.scss";

type Props = {
  onChooseFile: (file: File) => void;
  value?: {
    name: string;
    size: number;
    type: string;
  };
};

const FileUpload: React.FC<Props> = ({ onChooseFile, value }) => {
  return (
    <div className="pb-4">
      <label role="label" className={styles.fileUploadBox} htmlFor="file">
        {value ? <span>{value.name}</span> : <span>Click to upload</span>}
      </label>
      <input
        className="d-none"
        type="file"
        id="file"
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
