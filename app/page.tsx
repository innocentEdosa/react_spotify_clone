import Image from "next/image";
import Footer from "./footer"
import Header from "./header"
import Profile from "./profile"
import UserContextWrapper from "./userContext";

export default function Home() {
  return (
    <UserContextWrapper>
      <Header />
      <Profile />
      <Footer />
    </UserContextWrapper>
  );
}
