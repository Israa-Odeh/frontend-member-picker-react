import FrontendMember from "./FrontendMember";
import members from "./constants";

const MemberList = () => {
  return (
    <>
      {members.map((member) => (
        <FrontendMember key={member.id} member={member} />
      ))}
    </>
  );
};

export default MemberList;
