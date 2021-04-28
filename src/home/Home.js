import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { VideoList } from "./VideoList";
export const Home = () => {
  return (
    <>
      <Header />
      <SideNav />

      <div className="main">
        <VideoList />
      </div>
    </>
  );
};
