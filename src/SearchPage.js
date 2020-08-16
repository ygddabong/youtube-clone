import React from 'react'
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="719k"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr />
            <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
                        <VideoRow
                title="🔴 Let's Build an Instagram Reels Clone with REACT JS for Beginners!"
                views="25,264 Views"
                timestamp="2020. 8. 15."
                subs="719k"
                description="In this FREE LIVE training, Qazi and Sonny will build an Instagram Reels Clone LIVE with REACT JS and firebase!🚀🔥"                channel="The Flutter Way"
                image="https://img.youtube.com/vi/-M8HEGLFkFE/0.jpg"
            />
        </div>
    )
}

export default SearchPage
