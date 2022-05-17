import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import './index.css';


const App = () => {
	const [estadoModalGoGreen, cambiarEstadoGoGreen] = useState(true);
	return (
		<div>
			

			{estadoModalGoGreen &&
                <Overlay>
                    <ContenedorModal>
                        <div className="container mt-3">
                            <div className="row ">
                                <div className="col">
                                    <div className="mt-1 mb-3 lb-text-center lb-w-60 mx-auto lb-go-green-message">
                                        <span className="">
                                            Hi everyone!!! How are you? <br />
                                            <br />
                                            HELP US GO GREEN ♻️, no more paper 📝 <br />
                                            <br />
                                            We’ve been trying for a few months now to go green ♻️and
                                            we’ve come a long way but we need your help to go all the
                                            way. <br />
                                            <br />
                                            Please no more paper!❌ <br />
                                            <br />
                                            Please fill all the information that the system requires for
                                            your check in <br />
                                            <br />
                                            ♻️THINK GREEN, THINK CLEAN ♻️
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BotonCerrar onClick={() => cambiarEstadoGoGreen(false)}>
                           <FontAwesomeIcon icon={faXmark}> </FontAwesomeIcon>
                        </BotonCerrar>
                    </ContenedorModal>
                </Overlay>
            }
			

		
		</div>
	);
}
 
export default App;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5) ;
    padding: 40 px;
    display: flex;
    align-items: center ;
    justify-content: center;
    `;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #C2608E;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 30px;
    height: 30px;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #000000;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;
