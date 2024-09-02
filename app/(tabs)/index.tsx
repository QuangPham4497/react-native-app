import { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  StatusBar,
  View,
  Button,
  TextInput,
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const pressButton = () => {
    return true;
  };
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name} </Text>
      <TextInput
        style={{ width: 200, borderWidth: 1, borderColor: "red", padding: 5 }}
        multiline
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>Age {age} </Text>
      <TextInput
        style={{ width: 200, borderWidth: 1, borderColor: "red", padding: 5 }}
        multiline
        onChangeText={(value) => setAge(+value)}
        keyboardType="numeric"
        maxLength={3}
      />
      <View style={styles.button}>
        <Button title="Click to change" onPress={() => pressButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
    gap: 10,
  },
  text: {
    color: "red",
    fontSize: 50,
  },
  button: {
    backgroundColor: "red",
    cursor: "pointer",
  },
});
