import { useEffect, useState } from "react";

const useUserDetails = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    const userDetails = await fetch("https://api.github.com/users/Harishrk22");
    const jsonData = await userDetails.json();

    setUserData(jsonData);
  };
  return { userData };
};

export default useUserDetails;
