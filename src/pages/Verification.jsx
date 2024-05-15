import React, { Link } from "react-router-dom";
import styled from "styled-components";
import verified from ".././components/assets/images/verified1.gif";
import { IoMdArrowRoundBack } from "react-icons/io";

const Verification = () => {
  // const [active,setActive]  = useState(false);
  // const display  = ()=>{ setActive(true) }

  return (
    <Container>
      {/* <Heading>
        <img src={logo1} alt="" />
        <div> 
          <Link to="/">
            Simpl<span>byte</span>
          </Link>
        </div>
      </Heading> */}

      <Content>
        <button class="h-12 mx-1 absolute top-3 left-3 w-32 bg-gradient-to-br  to-gray-400 flex justify-center items-center flex-row-reverse cursor-pointer font-mono border border-white text-gray-400 transition duration-500 rounded-md shadow-md hover:shadow-xl hover:text-gray-200 active:shadow-inner active:shadow-2xl">
          <Link to="/" className="flex justify-center items-center gap-2">
            <IoMdArrowRoundBack />
            Home
          </Link>
        </button>
        <Box>
          <div>
            <Img src={verified}></Img>
            <h1>Your Document is Verified</h1>
            <p>
              The Candidate have completed one month virtual internship
              successfully! under Simplbyte
            </p>
          </div>
        </Box>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #050816;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.div`
  margin-top:0.5rem
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 10rem;
    height: 10rem;
    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
  }
  div {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px white;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    span {
      color: #915eff;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const Box = styled.div`
  padding: 30px;
  width: 50vw;
  /* border: 2px solid white; */
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 11px 1px rgba(256, 256, 256, 0.14),
    0px 0px 19px 6px rgba(256, 256, 256, 0.03),
    0px 0px 26px 12px rgba(256, 256, 256, 0.14),
    0px 0px 29px 12px rgba(256, 256, 256, 0.14);
  border: 1px solid rgba(256, 256, 256, 0);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
    height: 40vh;
  }

  div {
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      /* text-align:center ; */
      font-size: 3rem;
      font-weight: bold;
      color: white;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 0.8rem;
      }
    }
    p {
      margin-top: 10px;
      text-align: center;
      font-size: 1.2rem;
      color: white;
      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  margin-left: 55px;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    margin-left: 80px;
  }
`;
export default Verification;
