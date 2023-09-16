export interface SerieSearchResponse {
  total: number;
  page: number;
  pages: number;
  tv_shows: Serie[];
}

export interface Serie {
  id: number;
  name: string;
  permalink: string;
  start_date: string;
  end_date?: string;
  country: string;
  network: string;
  status: string;
  image_thumbnail_path: string;
}

export interface SerieDetailSearchResponse {
  tvShow: SerieDetail;
}

export interface SerieDetail {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: string;
  description_source: string;
  start_date: string;
  end_date: any;
  country: string;
  status: string;
  runtime: number;
  network: string;
  youtube_link: any;
  image_path: string;
  image_thumbnail_path: string;
  rating: string;
  rating_count: string;
  countdown: any;
  genres: string[];
  pictures: string[];
  episodes: Episode[];
}

export interface Episode {
  season: number;
  episode: number;
  name: string;
  air_date: string;
}

export interface SerieSalvata {
  userId: number;
  serie: SerieDetail;
  status?: string;
  rating?: number;
  review?: string;
  season?: number;
  episode?: number;
}

export class SerieSalvataDTO {
  userId: number;
  serie: SerieDetailDTO;
  status?: string;
  rating?: number;
  review?: string;
  season?: number;
  episode?: number;

  constructor(
    userId: number,
    serie: SerieDetailDTO,
    status?: string,
    rating?: number,
    review?: string,
    season?: number,
    episode?: number
  ) {
    this.userId = userId;
    this.serie = serie;
    this.status = status;
    this.rating = rating;
    this.review = review;
    this.season = season;
    this.episode = episode;
  }
}

export class SerieDetailDTO {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: string;
  description_source: string;
  start_date: string;
  end_date: any;
  country: string;
  status: string;
  runtime: number;
  network: string;
  youtube_link: any;
  image_path: string;
  image_thumbnail_path: string;
  rating: string;
  rating_count: string;
  countdown: any;
  genres: string[];
  pictures: string[];
  episodes: EpisodeDTO[];

  constructor(
    id: number,
    name: string,
    permalink: string,
    url: string,
    description: string,
    description_source: string,
    start_date: string,
    end_date: any,
    country: string,
    status: string,
    runtime: number,
    network: string,
    youtube_link: any,
    image_path: string,
    image_thumbnail_path: string,
    rating: string,
    rating_count: string,
    countdown: any,
    genres: string[],
    pictures: string[],
    episodes: EpisodeDTO[]
  ) {
    this.id = id;
    this.name = name;
    this.permalink = permalink;
    this.url = url;
    this.description = description;
    this.description_source = description_source;
    this.start_date = start_date;
    this.end_date = end_date;
    this.country = country;
    this.status = status;
    this.runtime = runtime;
    this.network = network;
    this.youtube_link = youtube_link;
    this.image_path = image_path;
    this.image_thumbnail_path = image_thumbnail_path;
    this.rating = rating;
    this.rating_count = rating_count;
    this.countdown = countdown;
    this.genres = genres;
    this.pictures = pictures;
    this.episodes = episodes;
  }
}

export interface EpisodeDTO {
  season: number;
  episode: number;
  name: string;
  air_date: string;
}
