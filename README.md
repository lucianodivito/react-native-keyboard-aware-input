# react-native-keyboard-aware-input

[![npm version](https://img.shields.io/npm/v/react-native-keyboard-aware-input.svg?style=flat-square)](https://www.npmjs.com/package/react-native-keyboard-aware-input)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A React Native input component that enhances mobile text input experience. It shows a placeholder input that opens a modal with the keyboard when pressed. Handles keyboard height automatically and allows full style and behavior customization.

---

## Installation

npm install react-native-keyboard-aware-input

# or

yarn add react-native-keyboard-aware-input

> Requires react-native-safe-area-context.

---

## Basic Usage

```js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareInput } from 'react-native-keyboard-aware-input';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAwareInput
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
```

---

## Props

Extends all TextInput props and adds:

| Prop              | Type                                       | Description                                                    |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------- |
| value             | string                                     | Current value of the input.                                    |
| onChangeText      | (text: string) => void                     | Callback called when closing the modal with the updated value. |
| containerStyle    | ViewStyle                                  | Style of the modal container.                                  |
| closeButtonStyle  | ViewStyle                                  | Style of the close button.                                     |
| renderCloseButton | ReactNode                                  | Custom render for the close button.                            |
| inputStyle        | TextStyle \| ViewStyle                     | Style for the placeholder input.                               |
| modalInputStyle   | TextStyle \| ViewStyle                     | Style for the input inside the modal.                          |
| onCloseCustom     | (value: string, close: () => void) => void | Custom function called when closing the modal.                 |
| showBackdrop      | boolean                                    | Display dark overlay behind the modal.                         |

---

## Features

- Touch input that opens a modal with the keyboard.
- Automatically adjusts for keyboard height using useKeyboardBottomInset.
- Fully customizable close button and input/modal styles.
- Supports all TextInput props.

---

## Advanced Usage

```js
<KeyboardAwareInput
  placeholder="Advanced usage"
  inputStyle={styles.input}
  closeButtonStyle={styles.customCloseButton}
  renderCloseButton={
    <View style={styles.customCloseButton}>
      <Text style={styles.customButtonText}>Ok</Text>
    </View>
  }
  onCloseCustom={(value, close) => {
    Alert.alert('Actual value:', value);
    close();
  }}
/>
```

---

<!-- ## Screenshots

![Example](https://user-images.githubusercontent.com/your-username/example-screenshot.png)

--- -->

## Contributing

1. Clone the repo.
2. Install dependencies: yarn install.
3. Run yarn lint and yarn prettier.
4. Make your changes and submit a PR.

---

## License

MIT
