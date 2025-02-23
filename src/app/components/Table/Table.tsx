import { FC } from "react";
import { useUsersWithTodos } from "@/app/hooks/useUsersWithTodos";
import cls from "./Table.module.scss";

export const Table: FC = () => {
  const { userTasks, isLoading } = useUsersWithTodos();

  if (isLoading) return <p>Loading...</p>;
  if (!userTasks.length) return <p>Error loading data</p>;

  return (
    <>

      <main>
        <table className={cls.Table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>To-Do Count</th>
            </tr>
          </thead>
          <tbody>
            {userTasks.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.todoCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
