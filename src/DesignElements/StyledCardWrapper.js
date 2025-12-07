import styled from "styled-components";

const StyledCardWrapper = styled.div`
  .card {
    width: 100%;
    height: auto;
    background: #07182E;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 20px;
  }

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 2em;
    text-align: center;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 120px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
  }

  .inner {
    position: relative;
    z-index: 10;
    padding: 16px;
    color: white;
  }
`;

export default StyledCardWrapper;
