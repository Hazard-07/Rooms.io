// app/(tabs)/reports/_layout.tsx
import { Stack } from 'expo-router';

export default function ReportsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="financial" />
      <Stack.Screen name="operational" />
    </Stack>
  );
}
