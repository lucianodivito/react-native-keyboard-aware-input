import { Dimensions, Keyboard, Platform } from 'react-native';
import { useState, useEffect } from 'react';

const useKeyboardBottomInset = (): number => {
  const [bottomInput, setBottomInput] = useState<number>(0);
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';

    const showSubscription = Keyboard.addListener(showEvent, (e) => {
      const newBottomInput = windowHeight - e.endCoordinates.screenY;
      setBottomInput(newBottomInput);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setBottomInput(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [windowHeight]);

  return bottomInput;
};

export default useKeyboardBottomInset;
