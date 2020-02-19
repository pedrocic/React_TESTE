import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
      * {
       
      }
      
      body, html {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
                       "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
                       "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
      
      code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      
`;

export const Content = styled.div `

    text-align: center;
    background-color: #282c34;
    min-height: 100vh;;
    
    .Main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        
        div {
            display: contents;
        }
    }
    
    .App-link {
        color: #61dafb;
    }

    .Label {
        display: none;
    }
    
    .Input {
        height: 40px;
        width: 400px;
        font-size: larger;
        margin: 10px;
        border-radius: 8px;
    }
    
    .Logo {
        height: 40vmin;
        pointer-events: none;
    }
    
    @media (prefers-reduced-motion: no-preference) {
        .Logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }
    
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
`;
