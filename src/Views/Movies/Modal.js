import React, { useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

// style Modal
const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0px;
left: 0px;
 
`;

const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;

const ModalImg = styled.img`
width: 96%;
height: 87%;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

//  open modal (animation)
const Modal = ({ showModal, setShowModal, movie }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })
  //  close Modal
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef} >
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.original_title} />
              <ModalContent>
                <h1>{movie.original_title}</h1>
                <p> {movie.overview}</p>
              </ModalContent>
              <CloseModalButton aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)} />

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}


export default Modal;
