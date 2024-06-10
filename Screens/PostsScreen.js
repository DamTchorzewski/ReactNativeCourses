import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      {/* Tutaj możesz dodać listę postów */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default PostsScreen;
