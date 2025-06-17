import { Stack } from 'expo-router';
import '../global.css';

export const unstable_settings = {
  initialRouteName: '(auth)/login',
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false, title: 'Login' }} />
    </Stack>
  );
}
