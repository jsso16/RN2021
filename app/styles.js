// 예제 4.5 - 컴포넌트에서 사용하게 될 분리된 style
import {StyleSheet} from 'react-native'

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark
  }
});

const darkSytleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light
  }
})

export default function getStyleSheet(useDarkTheme){
  return useDarkTheme ? darkSytleSheet : lightStyleSheet;
}