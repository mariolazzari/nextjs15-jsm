type UserPageProps = {
  params: {
    id: string;
  };
};

function UserPage({ params }: UserPageProps) {
  const { id } = params;

  return <div>User Details {id}</div>;
}

export default UserPage;
