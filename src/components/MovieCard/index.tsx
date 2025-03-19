import { useState } from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";

interface MovieProps {
  title: string;
  description: string;
  poster: string;
  year: number;
  rating: number;
  style?: ViewStyle;
}

export function MovieCard({
  title,
  description,
  poster,
  year,
  rating,
  style,
}: MovieProps) {
  const [imageUrl, setImageUrl] = useState(poster);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Image 
        style={styles.poster}
        source={{ uri: imageUrl }}
        onError={() => setImageUrl('https://demofree.sirv.com/nope-not-here.jpg')}
      />

      <View style={styles.titleContainer}>
        <Text 
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      
      <Text 
        style={styles.description}
        numberOfLines={4}
        ellipsizeMode="tail"
      >{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.3)',
    flex: 1,
    gap: 16,
    maxWidth: '48%',
    minHeight: 350,
    maxHeight: 350,
    overflow: 'hidden',
    borderRadius: 8,
  },

  poster: {
    width: "100%", 
    minHeight: 200, 
    maxHeight: 200, 
    borderRadius: 10, 
    backgroundColor: '#f0f0f0', 
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: '75%',
  },

  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808011',
  },

  description: {
    fontSize: 14,
    color: '#666',
    width: '100%',
    paddingHorizontal: 8,
  },
})
