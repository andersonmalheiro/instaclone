import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiUser, FiHeart, FiCompass } from "react-icons/fi";
import {
  Container,
  Center,
  Divider,
  IconsContainer,
  SearchInput
} from "./styles";
import { Link } from "react-router-dom";

import logo from "assets/img/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Center>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <FaInstagram size={25} />
          <Divider />
          <img src={logo} alt="" style={{ height: "40px", marginTop: "5px" }} />
        </div>
        <div style={{ margin: "0 15vw" }}>
          <SearchInput type="text" placeholder="Busca" />
        </div>
        <IconsContainer>
          <FiCompass size={30} />
          <FiHeart size={30} style={{ margin: "0 20px" }} />
          <FiUser size={30} />
          {/* <Link to="/perfil">
          </Link> */}
        </IconsContainer>
      </Center>
    </Container>
  );
};

export default Navbar;
