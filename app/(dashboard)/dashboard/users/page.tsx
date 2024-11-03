import Link from "next/link";

function UsersPage() {
  const users = [1, 2, 3, 4].map(id => ({ id, name: `User ${id}` }));

  return (
    <div>
      <h2> Users Page</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
