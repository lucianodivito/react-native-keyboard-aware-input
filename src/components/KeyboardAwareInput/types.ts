import {
  type TextInputProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

export interface KeyboardAwareInputProps extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  closeButtonStyle?: ViewStyle;
  renderCloseButton?: React.ReactNode;
  inputStyle?: TextStyle | ViewStyle;
  modalInputStyle?: TextStyle | ViewStyle;
  onCloseCustom?: (value: string, close: () => void) => void;
  showBackdrop?: boolean;
}
