import personGary from "../images/person-gray.png";
import personBlack from "../images/person-black.png";

export default function FrontendMember({ member }) {
  return (
    <div className="form__member">
      <img
        src={personGary}
        alt="Gray icon of a person"
        className="form__person-icon--gray"
        width="15"
        height="15"
      />
      <img
        src={personBlack}
        alt="Black icon of a person"
        className="form__person-icon--black"
        width="15"
        height="15"
      />
      <label className="form__member-label" htmlFor={"member-" + member.id}>
        {member.name}
      </label>
      <input
        type="checkbox"
        name="member-name"
        id={"member-" + member.id}
        value={member.name}
        className="form__member-checkbox"
      />
    </div>
  );
}