import AuthManagement from "../components/features/auth/AuthManagement";
import { ChatRoomMain } from "../components/features/chat";
import Home from "../components/features/home";
type TDiffScreen = "home" | "auth" | "guildList";

interface IUrl {
  label: string;
  path: string;
  protect: boolean; // false : not log | true : should be log
  Cpn: any;
}

const RouterRecord: Record<TDiffScreen, IUrl> = {
  home: { label: "Home", path: "/", protect: false, Cpn: Home },
  auth: { label: "Auth", path: "/auth", protect: false, Cpn: AuthManagement },
  guildList: {
    label: "List Guild",
    path: "/guildList",
    protect: true,
    Cpn: ChatRoomMain,
  },
};

export default RouterRecord;
