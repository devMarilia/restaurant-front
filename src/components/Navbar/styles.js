import styled from "styled-components";

export const NavbarConteiner = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  border-bottom: 1px solid var(--secondary);
  .logo {
    font-weight: 700;
    font-size: 21px;
    margin: 15px;
    width: 10px;

  }
  .nav-items a {
    color: var(--senary);
    font-size: 16px;
    text-decoration: none;
    margin: 15px;
    position: relative;
    opacity: 0.9;
  }
  .nav-items a:hover {
    opacity: 1;
    color: var(--tertiary);
  }
  .nav-toggle {
    display: none;
  }
  @media (max-width: 700px) {
    border-bottom: 100%;
    .nav-items {
      position: absolute;
      top: 60px;
      display: flex;
      flex-direction: column;
   
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.45s;
    }
    nav-items > a::before {
      background: transparent;
    }
    .nav-items.open {
      transform: translateX(0);
    }
    .nav-toggle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .nav-toggle > .bar {
      position: relative;
      width: 32px;
      height: 2px;
        background: var(--secondary);
      transition: all 0.45s ease-in-out;
    }
    .nav-toggle > .bar::before,
    .nav-toggle > .bar::after {
      content: "";
      position: absolute;
      height: 2px;
      background: var(--secondary);
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }
    .nav-toggle .bar::before {
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }
    .nav-toggle > .bar::after {
      width: 32px;
      transform: translateY(8px);
    }
    .nav-toggle.open > .bar {
      transform: translateX(-40px);
      background: transparent;
    }
    .nav-toggle.open > .bar::before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
    }
    .nav-toggle.open > .bar::after {
      transform: rotate(-45deg) translate(26px, 26px);
    }
  }
`;