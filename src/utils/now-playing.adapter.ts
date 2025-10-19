import type { NowPlayingResponse } from '../interfaces'

type PlayingState = 'playing' | 'offline'

export interface NowPlayingAdapter {
  albumImageUrl: string
  artist: string
  artistUrl: string
  isPlaying: boolean
  songUrl: string
  timePlayed: number
  timeTotal: number
  title: string
  playingState: PlayingState
}

export const nowPlayingAdapter = (data: NowPlayingResponse): NowPlayingAdapter => ({
  albumImageUrl: data.item.album.images[0].url,
  artist: data.item.artists.map(artist => artist.name).join(', '),
  artistUrl: data.item.album.artists[0].external_urls.spotify,
  isPlaying: data.is_playing,
  songUrl: data.item.external_urls.spotify,
  timePlayed: data.progress_ms,
  timeTotal: data.item.duration_ms,
  title: data.item.name,
  playingState: data.is_playing ? 'playing' : 'offline'
})
