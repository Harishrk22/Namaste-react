import useUserDetails from "../utils/useUserDetails";

const About = () => {
  const { userData } = useUserDetails();
  console.log(userData);
  if (!userData) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>About</h1>
      <h2>{userData?.name}</h2>
      <h2>{userData?.email}</h2>
      <h2>{userData?.login}</h2>
    </div>
  );
};

export default About;
