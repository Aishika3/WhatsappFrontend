import { ConversationFlowForm, Documentation, Banner } from "components";
import { Cookies } from "react-cookie";
import { useThemeContext } from "providers";

function Home() {
  const {theme}=useThemeContext();
  const cookies = new Cookies();
  const token = cookies.get("userid");

  return (
    <main className="flex gap-5 pb-10 flex-col"style={{ backgroundColor: theme.backgroundColor.dark }}>
      <Banner />
      <Documentation />
    </main>
  );
}

export default Home;
