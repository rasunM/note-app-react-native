import { ImageSourcePropType } from "react-native"

export type TextFieldProps = {
    icon: string,
    placeholder: string,
    borderEnabled: boolean
}

export type CredentialsButtonProps = {
    logo: ImageSourcePropType,
    title: string,
    bgColor: string,
}
