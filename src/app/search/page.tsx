import { getDogList } from "@/services/api";
import { logout } from "../auth/auth";
import LogoutButton from "../components/LogoutButton";

export default async function SearchPage() {
  // const dogList = await getDogList();
  // const searchResults = await getSearchResults();

  return (
    <section>
      {/* <LogoutButton /> */}
      <button onClick={logout}>Log Out</button>
      {/* <label htmlFor="search" />
      <input
        type="text"
        id="search"
        placeholder="search for dogs..."
        value={value}
        onChange={(e) => e.target.value}
      /> */}
      {/* <div>{dogList}</div> */}
    </section>
  );
}
