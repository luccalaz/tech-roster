import { getTechnologies } from "@/tools/DataManager";
import { Technology } from "@/tools/data.model";
import { List } from "./List";

export default async function Home() {

  let technologies:Technology[] = await getTechnologies();

  return (
    <>
			{technologies.length > 0 ?
				<List technologies={technologies} />
			:
				<>There are currently no technologies in the database :(</>
			}
		</>
  );
  
}