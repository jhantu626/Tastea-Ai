import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const PrimaryLoader = () => {
  // Animation values for each bar
  const scaleValue1 = new Animated.Value(0.05);
  const scaleValue2 = new Animated.Value(0.05);
  const scaleValue3 = new Animated.Value(0.05);
  const scaleValue4 = new Animated.Value(0.05);
  const scaleValue5 = new Animated.Value(0.05);

  // Animation function
  const startAnimation = (animatedValue, delay) => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 900,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0.05,
          duration: 900,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  // Start animations for each bar
  React.useEffect(() => {
    startAnimation(scaleValue1, 0);
    startAnimation(scaleValue2, 200);
    startAnimation(scaleValue3, 400);
    startAnimation(scaleValue4, 600);
    startAnimation(scaleValue5, 800);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.bar, { backgroundColor: '#4c86f9', transform: [{ scaleY: scaleValue1 }] }]}
      />
      <Animated.View
        style={[styles.bar, { backgroundColor: '#49a84c', transform: [{ scaleY: scaleValue2 }] }]}
      />
      <Animated.View
        style={[styles.bar, { backgroundColor: '#f6bb02', transform: [{ scaleY: scaleValue3 }] }]}
      />
      <Animated.View
        style={[styles.bar, { backgroundColor: '#f6bb02', transform: [{ scaleY: scaleValue4 }] }]}
      />
      <Animated.View
        style={[styles.bar, { backgroundColor: '#2196f3', transform: [{ scaleY: scaleValue5 }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    gap: 2,
  },
  bar: {
    width: 4,
    height: 25,
  },
});

export default PrimaryLoader;