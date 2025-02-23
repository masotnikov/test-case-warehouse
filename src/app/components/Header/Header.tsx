import { FC } from "react";
import cls from "./Header.module.scss";



export const Header: FC = () => {

  return (
    <header>
      <h1 className={cls.Header}>User To-Do Table</h1>
      <p>User task table for effective planning.</p>
    </header>
  );
};

