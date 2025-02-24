import { FC } from "react";
import cls from "./TableBody.module.scss";
import UserIcon from "@/app/assets/user-icon.svg";
import { useTodos } from "@/app/hooks/useTodos";


export const TableBody: FC = () => {
  const { userTasks, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (!userTasks.length) return <p>Error loading data</p>;


  return (
    <tbody>
      {userTasks.map((user, index) => (
        <tr key={user.id}>
          <td>{index + 1}</td>
          <td className={cls.userName}>
            <UserIcon className={cls.icon}/>
            <div className={cls.userInfo}>
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          </td>
          <td>{user.todoCount}</td>
        </tr>
      ))}
    </tbody>

  );
};

