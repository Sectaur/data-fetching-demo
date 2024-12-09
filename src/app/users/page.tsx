interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

async function UsersPage() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  console.log(users);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Website:</span>{' '}
              <a
                href={`https://${user.website}`}
                className="text-blue-500 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Company:</span> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
