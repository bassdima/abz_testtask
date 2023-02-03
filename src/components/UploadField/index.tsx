import { limitCharacters } from "../../helpers";

interface UploadFieldProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    file?: any,
}

export const UploadField = ({ handleChange, file }: UploadFieldProps) => {
    return (
        <div className="file-upload-wrapper">
            <input
                name="photo"
                type="file"
                className="file-upload-field"
                onChange={handleChange}
                value="" />
            <div className="upload-btn">Upload</div>
            <div
                className="file-name"
                style={{ color: file.name ? 'rgba(0, 0, 0, 0.87)' : '#7E7E7E' }}
            >
                {file.name ? limitCharacters(file.name, 25) : 'Upload your photo'}
            </div>
        </div>
    );
}
