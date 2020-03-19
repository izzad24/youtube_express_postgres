import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Uploader } from "./Uploader";
import { Playlist } from "./Playlist";

@Entity("videos")
export class Video {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    length: number;

    @Column({name: "num_upvotes"})
    numUpvotes: number;

    @Column({name: "num_downvotes"})
    numDownvotes: number;

    @ManyToOne(type => Uploader)
    @JoinColumn({ name: 'uploader_id' })
    uploader: Uploader

    @ManyToOne(type => Playlist)
    @JoinColumn({ name: 'playlist_id' })
    playlist: Playlist
}
