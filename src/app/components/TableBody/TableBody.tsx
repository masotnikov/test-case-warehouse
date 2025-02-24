import { FC } from "react";
import cls from "./TableBody.module.scss";
import UserIcon from "@/app/assets/user-icon.svg";
import { useTodos } from "@/app/hooks/useTodos";


export const TableBody: FC = () => {
  const { userTasks, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (!userTasks.length) return <div>Error loading data</div>;

  return (
    <tbody>
      {userTasks.map((user, index) => (
        <tr className={cls.tableRow} key={user.id}>
          <td className={cls.number}>{index + 1}</td>
          <td className={cls.wrapper}>
            <UserIcon className={cls.icon}/>
            <div className={cls.info}>
              <span className={cls.userName}>{user.username}</span>
              <span className={cls.email}>{user.email}</span>
            </div>
          </td>
          <td className={cls.todoCount}>{user.todoCount}</td>
        </tr>
      ))}
    </tbody>

  );
};

