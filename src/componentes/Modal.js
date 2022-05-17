import React from 'react';
import styled from 'styled-components';

const Modal = ({ estadoGoGreen, cambiarGoGreen }) => {
    return (
        <>
            {estadoGoGreen &&
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
                        <BotonCerrar onClick={() => cambiarGoGreen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </BotonCerrar>
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default Modal;

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
    background: #c2608e;
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

