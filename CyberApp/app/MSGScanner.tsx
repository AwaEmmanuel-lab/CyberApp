import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const SmishingDetector = () => {
  const [message, setMessage] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const suspiciousWords = [
    'urgent', 'immediately', 'bank', 'account', 'suspended',
    'verify', 'password', 'otp', 'blocked', 'click', 'refund',
    'payment', 'alert', 'warning', 'limited time', 'security'
  ];

  const analyzeMessage = () => {
    if (!message.trim()) {
      setAnalysis(null);
      return;
    }

    // 1️⃣ Extract links using RegEx
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const foundLinks = message.match(linkRegex) || [];

    // 2️⃣ Extract urgency / scammy words
    const lowerMsg = message.toLowerCase();
    const detectedWords = suspiciousWords.filter(word => lowerMsg.includes(word));

    // 3️⃣ Calculate risk level
    let riskLevel = 'Low';
    if (foundLinks.length > 0 && detectedWords.length >= 3) {
      riskLevel = 'High';
    } else if (detectedWords.length >= 2) {
      riskLevel = 'Medium';
    }

    const result = {
      links: foundLinks,
      keywords: detectedWords,
      risk: riskLevel
    };

    setAnalysis(result);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Smishing Detector</Text>

      <TextInput
        placeholder="Paste the suspicious SMS message here..."
        style={styles.textInput}
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={analyzeMessage}>
        <Text style={styles.buttonText}>Scan Message</Text>
      </TouchableOpacity>

      {analysis && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultTitle}>Analysis Results</Text>

          <Text style={styles.label}>🔗 Links Found:</Text>
          {analysis.links.length > 0 ? (
            analysis.links.map((link: string, i: number) => (
              <Text key={i} style={styles.resultText}>{link}</Text>
            ))
          ) : (
            <Text style={styles.resultText}>No links detected</Text>
          )}

          <Text style={styles.label}>⚠ Suspicious Keywords:</Text>
          {analysis.keywords.length > 0 ? (
            analysis.keywords.map((word: string, i: number) => (
              <Text key={i} style={styles.resultText}>{word}</Text>
            ))
          ) : (
            <Text style={styles.resultText}>No suspicious keywords found</Text>
          )}

          <Text style={styles.label}>🟥 Risk Level:</Text>
          <Text style={[styles.resultText, { fontWeight: 'bold' }]}>
            {analysis.risk}
          </Text>

          {analysis.risk === 'High' && (
            <Text style={styles.warning}>
              This message looks VERY dangerous.  
              Do NOT click any links or share personal information.
            </Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default SmishingDetector;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  textInput: {
    minHeight: 120,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 15,
    fontSize: 16
  },
  button: {
    backgroundColor: '#D3AF37',
    padding: 14,
    borderRadius: 10,
    marginTop: 15
  },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
  resultsContainer: { marginTop: 30 },
  resultTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 18, marginTop: 15, fontWeight: 'bold' },
  resultText: { fontSize: 16, marginTop: 5 },
  warning: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  }
});
