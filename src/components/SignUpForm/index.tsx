import { InputFieldText, Button, UploadField, RadioButtons } from "../index";
import { CONTENT, placeholderText, formValues } from "../../constans";
import { useFormik } from "formik";
import { SignupSchema } from "../../formValidationRules";
import { useGetDataForSignUpForm, postSignUpForm } from "../../API_request";
import { useState } from "react";
import { useStartPreloader } from "../../hooks";

type KeyPlaceholder = keyof typeof placeholderText;

interface SignUpFormProps {
    startPreloader: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignUpForm = ({ startPreloader }: SignUpFormProps) => {
    const { positions, loading, error } = useGetDataForSignUpForm();
    const [postResponse, setPostResponse] = useState(false);
    const [postLoading, setPostLoading] = useState(true);
    const [postError, setPostError] = useState(false);

    useStartPreloader(startPreloader, loading);
    useStartPreloader(startPreloader, postLoading);

    const formState = useFormik({
        initialValues: formValues,
        validationSchema: SignupSchema,
        onSubmit: values => {
            postSignUpForm(values, setPostResponse, setPostError, setPostLoading);
        }
    })

    return (
        <form onSubmit={formState.handleSubmit} className="form-wrapper">
            <div className="form-wrapper-inputs">
                {Object.keys(placeholderText).map((item) => {
                    return (
                        <InputFieldText
                            key={item}
                            placeholderText={placeholderText[item as KeyPlaceholder]}
                            type={item}
                            name={item}
                            handleChange={formState.handleChange}
                            handleBlur={formState.handleBlur}
                            formValue={formState.values[item as KeyPlaceholder]}
                            children={
                                formState.touched[item as KeyPlaceholder] && formState.errors[item as KeyPlaceholder] ?
                                    <div className="error">{formState.errors[item as KeyPlaceholder]}</div> : null
                            }
                        />
                    );
                })}
            </div>
            <p className="filling-example">{CONTENT.EXAMPLE_PHONE}</p>
            <p className="title-positions">{CONTENT.TITLE_POSITIONS}</p>
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
                handleBlur={formState.handleBlur}
                file={formState.values.photo}
                children={
                    formState.touched.photo && formState.errors.photo ?
                        <div className="error">{formState.errors.photo}</div> : null
                }
            />
            <Button
                text='Sign up'
                additionalClass='sign-up-button-submit'
                btnType='submit'
            />
        </form>
    );
}
