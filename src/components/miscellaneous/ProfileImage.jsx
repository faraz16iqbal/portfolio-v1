import { Image } from "@chakra-ui/react";
import profile from "../../assets/personal/profile.jpg";

const ProfileImage = () => {
  return (
    <Image
      mx="auto"
      borderRadius="full"
      objectFit="cover"
      boxSize={{
        base: "160px",
        sm: "240px",
        md: "300px",
        lg: "320px",
        xl: "400px",
      }}
      src={profile}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Faraz Iqbal"
    />
  );
};

export default ProfileImage;
