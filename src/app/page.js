import Image from "next/image";
import styles from "./page.module.css";

import Greeting from "./components/greeting"
import TaskList from "./components/tasklist"
import ActionButton from './components/action_button'
import ProfileCard from "./components/profile_card";
import ImageGallerey from "./components/image_gallerey";

export default function Home() {
  return (
    <main>
      <Greeting />
      <div className="content">
        <TaskList />
        <ActionButton />
        <ProfileCard name="Анна Иванова" doljnost="Веб-разработчик" />
        <ImageGallerey />
      </div>
    </main>
  );
}
