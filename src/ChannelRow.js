import React from 'react'
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar class="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <CheckCircleOutlineIcon />}
                </h4>
                <p>
                    {subs} subscribers ∙ {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
