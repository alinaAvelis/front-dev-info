import React,{useState, useEffect} from 'react';


type AppFooterProps = {

  };

const AppFooter = ({}: AppFooterProps) => {
   
    return (
        <footer className="footer">
          <p>© 2022 
            <a href="https://alina-avelis.com/" target="_blank" rel="noreferrer">
              Vasileva Alina
            </a>
          </p>
        </footer>
    )
}


export default AppFooter;