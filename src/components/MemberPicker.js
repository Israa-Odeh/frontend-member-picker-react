import SearchBar from "./SearchBar";
import MemberList from "./MemberList";
import FormButtons from "./FormButtons";
import '../css/main.css';

export default function MemberPicker() {
  return (
    <main>
      <form className="form" action="https://httpbin.org/post" method="post">
        <section
          className="form__members-container"
          aria-label="Members to choose from for the frontend development team, with a search bar to filter results"
        >
          <SearchBar />
          <MemberList />
          <FormButtons />
        </section>
      </form>
    </main>
  );
}