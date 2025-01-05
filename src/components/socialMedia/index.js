import "./SocialMedia.css";

const SocialMedia = ({ imageSrc, imageAlt, anchorHref }) => {
    return (
        <a className="social-media-link" href={anchorHref} target="_blank" rel="noreferrer">
            <img src={imageSrc} alt={imageAlt} />
        </a>
    );
}

export default SocialMedia;