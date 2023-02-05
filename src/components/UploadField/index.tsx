import { limitCharacters } from "../../helpers";

interface UploadFieldProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur?: React.FocusEventHandler<HTMLInputElement>,
    file: string | File,
    error: string | null | undefined,
    errorClass: string
}

export const UploadField = ({ handleChange, handleBlur, file, error, errorClass }: UploadFieldProps) => {
    return (
        <div className={`file-upload-wrapper ${error ? "file-upload-wrapper-error" : "file-upload-wrapper-correct"}`}>
            <input
                name="photo"
                type="file"
                className="file-upload-field"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div className={`upload-btn ${error ? "upload-btn-error" : "upload-btn-correct"}`}>Upload</div>
            <div
                className="file-name"
                style={{ color: typeof file !== 'string' ? 'rgba(0, 0, 0, 0.87)' : '#7E7E7E' }}
            >
                {typeof file !== 'string' ? limitCharacters(file.name, 25) : 'Upload your photo'}
            </div>
            <div className={errorClass}>{error ? error : null}</div>
        </div>
    );
}
