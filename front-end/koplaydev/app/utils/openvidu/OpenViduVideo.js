import { useRef, useEffect } from 'react';

const OpenViduVideo = ({ streamManager }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (streamManager && videoRef.current) {
            streamManager.addVideoElement(videoRef.current);
        }
    }, [streamManager]);

    return <video style={{width : "100px"}} autoPlay={true} ref={videoRef} />;
};

export default OpenViduVideo;