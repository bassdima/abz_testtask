import { InputFieldText, Button, UploadField, RadioButtons } from "../index";
import { CONTENT, placeholderText, formValues } from "../../constans";
import { useFormik } from "formik";
import { SignupSchema } from "../../validationRules";
import { useGetDataForSignUpForm, postSignUpForm } from "../../API";
import { useState } from "react";
import { useStartPreloader, useFormValid } from "../../hooks";

type KeyPlaceholder = keyof typeof placeholderText;

interface SignUpFormProps {
    startPreloader: React.Dispatch<React.SetStateAction<boolean>>,
    setIsResponseSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setIsResponseWithError: React.Dispatch<React.SetStateAction<boolean>>,
    userExist: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignUpForm = ({ startPreloader, setIsResponseSuccess, setIsResponseWithError, userExist }: SignUpFormProps) => {
    const { positions, loading, error } = useGetDataForSignUpForm();
    const [postLoading, setPostLoading] = useState(true);
    useStartPreloader(startPreloader, loading);
    useStartPreloader(startPreloader, postLoading);

    const formState = useFormik({
        initialValues: formValues,
        validationSchema: SignupSchema,
        onSubmit: values => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                formData.append(key, values[key as keyof typeof values])
            })
            postSignUpForm(formData, setIsResponseSuccess, setIsResponseWithError, setPostLoading, userExist);
        }
    })

    const isformValid = useFormValid(formState.values);

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
                            error={
                                formState.touched[item as KeyPlaceholder] && formState.errors[item as KeyPlaceholder] ?
                                    formState.errors[item as KeyPlaceholder] : null
                            }
                            errorClass='error'
                            additionalClass="filling-example"
                        />
                    );
                })}
            </div>
            <p className="title-positions">{CONTENT.TITLE_POSITIONS}</p>
            {error ?
                <h2>Error. Page not found</h2>
                :
                <RadioButtons
                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        formState.setFieldValue('position_id', e.target.dataset.position)
                    }}
                    radioBtnContent={positions}
                />
            }
            <UploadField
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formState.setFieldValue('photo', e.target.files?.[0] || '')
                }}
                file={formState.values.photo}
                error={
                    formState.touched.photo && formState.errors.photo ?
                        formState.errors.photo : null
                }
                errorClass='error'
                handleBlur={formState.handleBlur}
            />
            <Button
                text='Sign up'
                additionalClass='sign-up-button-submit'
                btnType='submit'
                isDisabled={isformValid}
            />
        </form>
    );
}
 