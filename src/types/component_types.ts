import {
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputSelectionChangeEventData,
} from 'react-native';

export type TextFieldProps = {
  icon: string;
  placeholder: string;
  borderEnabled: boolean;
  onClickData: (text: string) => void;
};

export type CredentialsButtonProps = {
  logo: ImageSourcePropType;
  title: string;
  bgColor: string;
};

export type SignButtonProps = {
  title: string;
};
