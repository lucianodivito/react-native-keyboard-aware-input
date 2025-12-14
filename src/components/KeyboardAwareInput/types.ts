import {
  type TextInputProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

export interface KeyboardAwareInputProps
  extends Omit<TextInputProps, 'value' | 'onChangeText' | 'editable'> {
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  closeButtonStyle?: ViewStyle;
  renderCloseButton?: React.ReactElement;
  inputStyle?: TextStyle;
  modalInputStyle?: ViewStyle;
  onCloseCustom?: (value: string, close: () => void) => void;
  showBackdrop?: boolean;
}
