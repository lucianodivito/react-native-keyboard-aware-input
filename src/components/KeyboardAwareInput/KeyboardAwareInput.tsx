// src/components/KeyboardAwareInput/KeyboardAwareInput.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import useKeyboardBottomInset from '../../hooks/useKeyboardBottomInset';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { type KeyboardAwareInputProps } from './types';

const KeyboardAwareInput: React.FC<KeyboardAwareInputProps> = (props) => {
  const {
    value = '',
    placeholder,
    containerStyle,
    closeButtonStyle,
    renderCloseButton,
    inputStyle,
    modalInputStyle,
    onCloseCustom,
    showBackdrop = false,
    ...restProps
  } = props;

  const [visible, setVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const inputRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  const bottomInput = useKeyboardBottomInset();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const close = () => {
    const doClose = () => {
      setVisible(false);
      props.onChangeText?.(internalValue);
    };

    if (onCloseCustom) {
      onCloseCustom(internalValue, doClose);
    } else {
      doClose();
    }
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            value={internalValue}
            placeholder={placeholder}
            style={[styles.fakeInput, inputStyle]}
            {...restProps}
          />
        </View>
      </TouchableOpacity>

      <Modal
        visible={visible}
        animationType="none"
        transparent
        onRequestClose={close}
        onShow={() => {
          setTimeout(() => {
            inputRef.current?.focus();
          }, 100);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            close();
          }}
        >
          <View
            style={[
              styles.overlay,
              { paddingBottom: bottomInput + insets.bottom },
              showBackdrop && styles.backdrop,
            ]}
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={[styles.modalContainer, containerStyle]}>
                <View style={[styles.inputRow, modalInputStyle]}>
                  <TextInput
                    ref={inputRef}
                    value={internalValue}
                    onChangeText={setInternalValue}
                    placeholder={placeholder}
                    style={styles.realInputWithButton}
                    onSubmitEditing={close}
                    autoFocus={false}
                    {...restProps}
                  />
                  <TouchableOpacity
                    onPress={close}
                    style={[styles.closeButtonInside, closeButtonStyle]}
                  >
                    {renderCloseButton ?? (
                      <Text style={styles.closeText}>X</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default KeyboardAwareInput;

const styles = StyleSheet.create({
  fakeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  overlay: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  realInputWithButton: { flex: 1, paddingVertical: 12, paddingRight: 8 },
  closeButtonInside: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#bdbdbd',
    borderRadius: 50,
  },
  closeText: { color: '#fff', fontSize: 16 },
});
