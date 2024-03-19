import { useState } from "react";
import TextInput from "./TextInput.js";
export default function FriendAdder({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageURL, setimageURL] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (friendName !== "" && imageURL !== "") {
      const id = crypto.randomUUID();
      const newFriend = {
        id: id,
        name: friendName,
        image: `${imageURL}?=${id}`,
        balance: 0,
      };
      onAddFriend(newFriend);
      setFriendName("");
      setimageURL("https://i.pravatar.cc/48");
    }
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <TextInput
          value={friendName}
          onChangeInput={(e) => setFriendName(e.target.value)}
        >
          👯 Friend name
        </TextInput>
        <TextInput
          value={imageURL}
          onChangeInput={(e) => setimageURL(e.target.value)}
        >
          🌇 Image URL
        </TextInput>
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
