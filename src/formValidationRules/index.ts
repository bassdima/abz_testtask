import * as Yup from "yup";
import "yup-phone";

const FILE_SIZE = {
    MAX: 5000000,
    MIN: 19600
};
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg"
];

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "The name must be at least 2 characters.")
        .max(60, "The name must be no more than 60 characters.")
        .required('Required'),

    email: Yup.string()
        .email("The email must be a valid email address.")
        .required('Required'),

    phone: Yup.string()
        .phone("The phone number is invalid.")
        .phone("UA", true, "Number should start with code of Ukraine +380")
        .required("The phone field is required."),

    photo: Yup.mixed()
        .test(
            "fileFormat",
            "Image is invalid.",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
        .test(
            "fileSizeMax",
            "The photo may not be greater than 5 Mbytes.",
            value => value && value.size <= FILE_SIZE.MAX
        )
        .test(
            "fileSizeMin",
            "Minimum size of photo 70x70px.",
            value => value && value.size >= FILE_SIZE.MIN
        )
});
