import { NativeModules } from 'react-native';

const { EmulatorDetector } = NativeModules;

// Call the native method to check if running on emulator
export const checkIfEmulator = (): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await EmulatorDetector.isEmulator();
      resolve(data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
