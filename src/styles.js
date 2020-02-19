import styled, { createGlobalStyle } from 'styled-components'
import img from './assets/img/login.jpg'

export const Global = createGlobalStyle`
      * {
           margin: 0;
           padding: 0;
           box-sizing: inherit;
      }
      
      body, html {
          height: 100%;
          font-family: Verdana,sans-serif;
          font-size: 15px;
          line-height: 1.5;
      }
      
`;

export const Content = styled.div `
      min-height: 100vh;
      background-image: url(${img});
      background-size: cover;
      background-position: top, center;
      
      #title {
          text-align: center;
          
          h1 {
              color: white;
              font-size: 32px; 
              font-weight: 800;
              line-height: 72px; 
              margin: 0 0 24px;
              text-transform: uppercase;
          }
          
      }
      
      #main {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
      }
      
      #content {
          color: white;
          max-width: 500px;
          padding: 40px;
          margin: auto;
          text-align: center;
          
          input {
              width: 100%;
              margin: 8px 0;
              display: inline-block;
              border: 1px solid #ccc;
              box-shadow: inset 0 1px 3px #ddd;
              border-radius: 4px;
              box-sizing: border-box;
              padding: 12px 20px;
              font: inherit;
          }
          
          button {
              width: 50%;
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 12px 20px;
              margin: 14px 0 8px 0;
              display: inline-block;
              border: none;
              border-radius: 4px;
              box-shadow: inset 0 1px 3px #ddd;
              font: inherit;
          }
          
      }
      
`;

