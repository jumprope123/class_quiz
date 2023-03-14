import YouTube, { YouTubeProps } from "react-youtube";

export default function index() {
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        height: "800",
        width: "600",
        playerVars: {
            autoplay: 1,
            mute: 1,
        },
    };

    return (
        <>
            <YouTube videoId="Ayfz-vLk95o" opts={opts} onReady={onPlayerReady} />
        </>
    );
}
