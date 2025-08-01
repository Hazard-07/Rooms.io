import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Staff = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="mb-6 text-2xl font-bold text-gray-800">Staff Report</Text>

      <View className="mb-6 w-full rounded-xl bg-gray-100 p-4">
        <Text className="text-base text-gray-700">• Total Staff: 25</Text>
        <Text className="text-base text-gray-700">• On Shift Now: 10</Text>
        <Text className="text-base text-gray-700">• Absent Today: 2</Text>
        <Text className="text-base text-gray-700">• Scheduled for Next Shift: 8</Text>
      </View>

      <Pressable
        className="rounded-lg bg-blue-600 px-6 py-3"
        onPress={() => router.push('/reports/operational')}>
        <Text className="text-base font-semibold text-white">Back to Operational Reports</Text>
      </Pressable>
    </View>
  );
};

export default Staff;
