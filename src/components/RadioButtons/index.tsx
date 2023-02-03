import { PositionsType } from "../../models"

interface RadioButtonsProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    radioBtnContent: PositionsType[]
}

export const RadioButtons = ({ handleChange, radioBtnContent }: RadioButtonsProps) => {
    return (
        <div className="radio-btn-container">
            {radioBtnContent.map((item: any) => {
                return (
                    <label key={item.id} className="radio-btn">
                        <input
                            type="radio"
                            name="position_id"
                            defaultChecked={item.id === 1}
                            onChange={handleChange}
                            data-position={item.id}
                            value={item.name}
                        />
                        <span className="checkmark" />
                        {item.name}
                    </label>
                )
            })}
        </div>
    );
}
