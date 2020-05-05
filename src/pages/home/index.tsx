import React from "react";
import Navbar from "components/navbar";
import { Route } from "react-router-dom";
import Perfil from "../perfil";
import { Container, FeedColumn, StoriesColumn } from "./styles";

import "./styles.scss";

const Home: React.FC = () => {
  document.title = "Instagram";
  return (
    <>
      <Navbar />
      <Container>
        <FeedColumn />
        <StoriesColumn>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt=""
              className="my-avatar"
            />
            <div className="my-info">
              <strong>_anderson_97</strong>
              <span className="my-name">Anderson Malheiro de Carvalho</span>
            </div>
          </div>
          <div className="stories-container">
            <div className="stories-header">
              <span style={{ fontSize: "14px", color: "#aaa" }}>Histórias</span>
              <strong style={{ fontSize: "12px" }}>Ver tudo</strong>
            </div>
            <div style={{ overflowY: "auto" }}>
              <ul>
                <li>
                  <div className="gradient-border">
                    <img
                      src="https://randomuser.me/api/portraits/women/78.jpg"
                      alt=""
                      className="user-avatar"
                    />
                  </div>
                  <div className="storie-info">
                    <strong>maria</strong>
                    <span className="storie-time">Há 11 minutos</span>
                  </div>
                </li>
                <li>
                  <div className="gradient-border">
                    <img
                      src="https://randomuser.me/api/portraits/men/78.jpg"
                      alt=""
                      className="user-avatar"
                    />
                  </div>
                  <div className="storie-info">
                    <strong>chicoBento21</strong>
                    <span className="storie-time">Há 13 minutos</span>
                  </div>
                </li>
                <li>
                  <div className="gradient-border">
                    <img
                      src="https://randomuser.me/api/portraits/men/48.jpg"
                      alt=""
                      className="user-avatar"
                    />
                  </div>
                  <div className="storie-info">
                    <strong>stalonne212</strong>
                    <span className="storie-time">Há 21 minutos</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="stories-container">
            <div className="stories-header" />
          </div>
        </StoriesColumn>
      </Container>
    </>
  );
};

export default Home;
