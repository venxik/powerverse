import EmulatorDetector from '@Native/EmulatorDetector';
import { useReduxSelector } from '@Stores';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Divider, Surface, Text } from 'react-native-paper';

const DetailScreen = () => {
  const animeData = useReduxSelector(s => s.main.selectedAnime);
  const [isEmulator, setIsEmulator] = useState(false);

  useEffect(() => {
    doCheckSimulator();
  }, []);

  const doCheckSimulator = async () => {
    const result = await EmulatorDetector.isEmulator();
    setIsEmulator(result);
  };

  return (
    <ScrollView style={styles.container}>
      {animeData && (
        <Surface style={{ padding: 20, margin: 10, borderRadius: 10 }}>
          <Image
            source={{ uri: animeData.images.jpg.image_url }}
            style={{ width: '100%', height: 400 }}
          />
          <Divider style={styles.divider} />
          <Text variant="headlineLarge" testID="txt-emulator">
            {isEmulator ? 'Running on emulator/simulator' : 'Running on device'}
          </Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Title</Text>
          <Text variant="bodyLarge">{animeData.title}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Rating</Text>
          <Text variant="bodyLarge">{animeData.rating ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Score</Text>
          <Text variant="bodyLarge">{animeData.score ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Year</Text>
          <Text variant="bodyLarge">{animeData.year ?? '-'}</Text>
          <Divider style={styles.divider} />
          <Text variant="headlineSmall">Synopsis</Text>
          <Text variant="bodyLarge">{animeData.synopsis}</Text>
        </Surface>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: { marginVertical: 10 },
});

export default DetailScreen;
