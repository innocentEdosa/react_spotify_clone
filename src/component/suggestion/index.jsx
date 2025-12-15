import { useEffect, useState } from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Suggestion = ({ label = "Discovery Pick for you", variant }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);




  return (
    <div className="w-[max-content]">

{isLoading && <div className="w-[500px] h-[500px]">
  
    <DotLottieReact
          src="https://lottie.host/7e44b030-a219-4d58-8832-794c2ad1f511/Z6WsyT1k4G.lottie"

      loop
      autoplay
    />
</div>}
{!isLoading && <>

     <h4 className="mb-6 text-2xl font-black text-white">{label}</h4>
      <ul className="grid grid-cols-4 gap-6">

      {users?.map((user) => {
        return <li key={user.id}>
          <UserCard>
          <AvatarWrapper variant={variant}>
            <Image src={faker.image.avatar()} />
          </AvatarWrapper>
          <p className="mt-6 mb-2 font-black">
            {user.name}
          </p>
          <span className="opacity-50">Artist</span>
          </UserCard>
        </li>;
      })}

      </ul>
</>}
    </div>
  );
};


const UserCard  = styled.div`
min-height: 319px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 232px;
background-color: rgba(255, 255, 255, 0.04);
border-radius: 8px;
padding: 16px;
color: white;
`

const AvatarWrapper = styled.aside`
    height: 199px;
    width: 199px;
    background-color: white;
    border-radius: ${props => props?.variant === "square" ? '0px' : '50%'};
    overflow: hidden;

`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// mounting => react creates and add component to the ui
// updating => state change, or props changes
// unmounting => component is removed from the ui
export default Suggestion;
