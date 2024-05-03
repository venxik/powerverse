import { NativeModules } from 'react-native';

const { EmulatorDetector } = NativeModules;

interface EmulatorDetectorInterface {
  isEmulator: () => Promise<boolean>;
}

export default EmulatorDetector as EmulatorDetectorInterface;
