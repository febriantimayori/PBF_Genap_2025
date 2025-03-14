import React from 'react';

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function UsersPage({ users }) {
return (
    <div>
        <h1>Daftar User</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <a href={`/users/${user.id}`}>{user.name}</a>
                </li>
            ))}
        </ul>
        <br />
        <a href="/">Home</a>
    </div>
);
}