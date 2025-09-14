class Playlist{
    private playlist: string[];
    constructor(){
        this.playlist = []
    }
    addSong(song: string):void{
        this.playlist.push(song)
    }
    createPlaylist(){
        return new Playlist()
    }
    getSongs(): string[]{
        return this.playlist
    }
}

class PlaylistIterator{
    private songList: string[];
    private index: number;

    constructor(songList: string[]){
        this.songList = songList
        this.index = 0 
    }

    hasNext(): boolean{
        return this.songList.length > this.index
    }
    
    next(): string{ 
        return this.songList[this.index++]    
    }
}

function main(){
    const playlist = new Playlist()
    const newPlaylist = playlist.createPlaylist()
    newPlaylist.addSong('hello')
    newPlaylist.addSong('there')

    const songList = newPlaylist.getSongs()

    const playlistIterator = new PlaylistIterator(songList)
    while(playlistIterator.hasNext()){
        console.log('current song', playlistIterator.next())
    }


}
main()