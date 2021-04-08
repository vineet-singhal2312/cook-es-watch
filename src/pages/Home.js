import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { VideoList } from "../VideoList";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <SideNav />
        <VideoList />
      </div>
    </>
  );
};
