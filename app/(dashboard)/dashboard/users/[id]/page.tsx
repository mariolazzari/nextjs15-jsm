type UserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  return <div>User Details {id}</div>;
}

export default UserPage;
