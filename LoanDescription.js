import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const LoanDescription = ({ route }) => {
const { description, documents } = route.params;
const navigation = useNavigation();

const copyFile = async (assetUri, fileName) => {
if (!assetUri) {
console.error('Invalid URI: The URI is null or undefined.');
return;
}

const fileUri = FileSystem.documentDirectory + fileName;

try {
await FileSystem.copyAsync({
from: assetUri,
to: fileUri,
});
console.log('File copied to:', fileUri);
} catch (error) {
console.error('Error copying file:', error);
}
};

useEffect(() => {
const loadAssetAndCopy = async () => {
const asset = Asset.fromModule(require('C:\Users\jack\Documents\Bedir\assets\test.pdf'));
await asset.downloadAsync();
copyFile(asset.localUri, 'test.pdf');
};

loadAssetAndCopy();
}, []);

return (
<ScrollView contentContainerStyle={styles.container}>
<Text style={styles.header}>Loan Description</Text>
<Text style={styles.description}>{description}</Text>
<Text style={styles.header}>Loan Documents</Text>
{documents && documents.map((doc, index) => (
<View key={index} style={styles.document}>
<Text style={styles.documentText}>{doc.name}</Text>
<Button title="Download" onPress={() => copyFile(doc.uri, doc.name)} />
</View>
))}
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flexGrow: 1,
padding: 20,
backgroundColor: '#F5F5F5',
},
header: {
fontSize: 24,
fontWeight: 'bold',
color: '#0057D8',
marginBottom: 20,
marginTop: 15,
textAlign: 'center',
},
description: {
fontSize: 16,
color: '#333',
marginBottom: 20,
lineHeight: 24,
},
document: {
marginBottom: 15,
},
documentText: {
fontSize: 16,
color: '#0057D8',
},
});

export default LoanDescription;