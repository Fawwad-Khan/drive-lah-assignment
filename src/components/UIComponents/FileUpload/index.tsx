import styles from "./FileUpload.module.scss";

type Props = {
  onChooseFile: (file: File) => void;
};

const FileUpload: React.FC<Props> = ({ onChooseFile }) => {
  return (
    <div className="pb-4">
      <label role="label" className={styles.fileUploadBox} htmlFor="file">
        <span>Click to upload</span>
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
