
export interface Business {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  description: string;
  imageUrl: string;
}

export interface Story {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
      reviewSnippets: {
        uri: string,
        reviewText: string,
      }[]
    }
  };
}

export interface SearchResult {
  text: string;
  sources: GroundingChunk[];
}

export interface UserLocation {
  latitude: number;
  longitude: number;
}
