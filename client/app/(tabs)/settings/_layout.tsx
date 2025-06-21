// app/(tabs)/settings/_layout.tsx
import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="hotel" />
      <Stack.Screen name="users" />
      <Stack.Screen name="system" />
    </Stack>
  );
}
