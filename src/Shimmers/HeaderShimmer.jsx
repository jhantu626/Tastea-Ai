import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { colors } from '../utils/colors';

const HeaderShimmer = ({isLoaded}) => {

  return (
    <View style={styles.container}>
      {/* Profile Image Shimmer */}
      <ShimmerPlaceholder
        visible={isLoaded}
        style={styles.profileImage}
      />

      {/* Location Shimmer */}
      <View style={styles.textContainer}>
        <ShimmerPlaceholder
          visible={isLoaded}
          style={styles.icon}
        />
        <ShimmerPlaceholder
          visible={isLoaded}
          style={styles.text}
        />
      </View>

      {/* Notification Bell Shimmer */}
      <ShimmerPlaceholder
        visible={isLoaded}
        style={styles.bell}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  text: {
    width: 100,
    height: 14,
    borderRadius: 4,
  },
  bell: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
  },
});

export default HeaderShimmer;
