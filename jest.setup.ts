import '@testing-library/react-native/extend-expect';
// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

require('jest-fetch-mock').enableMocks();

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.NativeModules.EmulatorDetector = {
    isEmulator: jest.fn().mockResolvedValue(false),
    // .mockImplementationOnce(() => Promise.resolve(() => false)),
  };
  return RN;
});
