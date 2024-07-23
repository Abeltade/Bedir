import React from 'react';
import { View, StyleSheet } from 'react-native';
import PDFViewer from './PDFViewer';

const PDFScreen = () => {
  const pdfSource = { uri: 'http://www.pdf995.com/samples/pdf.pdf', cache: true };

  return (
    <View style={styles.container}>
      <PDFViewer source={pdfSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PDFScreen;
