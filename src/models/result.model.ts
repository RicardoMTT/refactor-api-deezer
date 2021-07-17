// To parse this data:
//
//   import { Convert, Result } from "./file";
//
//   const result = Convert.toResult(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Datum {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: TitleVersion;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: DatumType;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: AlbumType;
}

export enum AlbumType {
  Album = 'album',
}

export interface Artist {
  id: number;
  name: Name;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: ArtistType;
}

export enum Name {
  Eminem = 'Eminem',
}

export enum ArtistType {
  Artist = 'artist',
}

export enum TitleVersion {
  Empty = '',
  From8MileSoundtrack = '(From "8 Mile" Soundtrack)',
  MusicFromTheMotionPicture = '(Music From The Motion Picture)',
  SoundtrackVersion = '(Soundtrack Version)',
}

export enum DatumType {
  Track = 'track',
}
