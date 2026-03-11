import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="Addition" options={{title: "Addition"}}/>
      <Drawer.Screen name="Subtraction" options={{title: "Subtract"}}/>
      <Drawer.Screen name="Multiplication" options={{title: "Multiplication"}}/>
      <Drawer.Screen name="Division" options={{title: "Division"}}/>
    </Drawer>
  );
}
