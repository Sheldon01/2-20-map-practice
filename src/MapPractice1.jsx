import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);

    const showEmojis = (emoji => {
        return (
            <div className="emoji">
                {emoji}
            </div>
        )
    }
)

    return (
        <div className="mapPractice">
            <h2>Sheldon&apos;s Emojis</h2>
            <div className="emojiList">
                {emojisArray.map(showEmojis)}
            </div>
        </div>
    );
}
