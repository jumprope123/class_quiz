import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("");

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const modalFooter = (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button key="submit" type="primary" onClick={toggleModal}>
                등록
            </Button>
            <Button key="cancel" onClick={toggleModal}>
                취소
            </Button>
        </div>
    );

    const handleComplete = (address: Address) => {
        if (address["userSelectedType"] === "J") {
            setAddress(address["jibunAddress"]);
        } else {
            setAddress(address["roadAddress"]);
        }

        console.log(address);
        toggleModal();
    };

    return (
        <>
            <Button type="primary" onClick={toggleModal}>
                모달열기
            </Button>
            <p>{address}</p>
            {isModalOpen && (
                <Modal title={"주소검색"} open={true} okText={"등록"} onOk={toggleModal} footer={modalFooter} onCancel={toggleModal}>
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
            )}
        </>
    );
};

export default App;
