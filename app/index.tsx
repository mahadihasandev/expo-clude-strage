import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

// Replace with actual Vercel deployment URL
const TARGET_URL = 'https://cloudestrage.vercel.app/';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: TARGET_URL }} 
        style={styles.webview}
        allowsBackForwardNavigationGestures
        bounces={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});
