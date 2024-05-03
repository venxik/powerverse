import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  UpcomingScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
