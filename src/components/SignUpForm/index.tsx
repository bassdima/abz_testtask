import { InputFieldText, Button, UploadField, RadioButtons } from "../index";
import { content, placeholderText } from "../../constans";
import { useFormik } from "formik";
import { SignupSchema } from "../../formValidationRules";
import { useGetDataForSignUpForm, postSignUpForm } from "../../API_request";
import { useState } from "react";

export const SignUpForm = () => {
    const { positions, loading, error } = useGetDataForSignUpForm();
    const [postResponse, setPostResponse] = useState(false);
    const [postLoading, setPostLoading] = useState(true);
    const [postError, setPostError] = useState(false);


    const formState = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            position_id: "1",
            photo: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                formData.append(key, values[key as keyof typeof values])
            })
            postSignUpForm(formData, setPostResponse, setPostError, setPostLoading);
        }
    })

    return (
        <form onSubmit={formState.handleSubmit} className="form-wrapper">
            <div className="form-wrapper-inputs">
                {Object.keys(placeholderText).map((item) => {
                    return (
                        <InputFieldText
                            key={item}
                            placeholderText={placeholderText[item as keyof typeof placeholderText]}
                            type={item}
                            name={item}
                            handleChange={formState.handleChange}
                            formValue={formState.values[item as keyof typeof placeholderText]}
                            error={formState.errors[item as keyof typeof placeholderText]}
                        />
                    );
                })}
            </div>
            <p className="filling-example">{content.EXAMPLE_PHONE}</p>
            <p className="title-positions">{content.TITLE_POSITIONS}</p>
            <RadioButtons
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formState.setFieldValue('position_id', e.target.dataset.position)
                }}
                radioBtnContent={positions}
            />
            <UploadField
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formState.setFieldValue('photo', e.target.files?.[0] || null)
                }}
                file={formState.values.photo}
            />
            {formState.errors && formState.errors.photo}
            <Button
                text='Sign up'
                additionalClass='sign-up-button-submit'
                btnType='submit'
            />
        </form>
    );
}
