import React, { useState } from "react";
import { Button, Modal } from "antd";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <>
            <Button type="primary" onClick={toggleModal}>
                모달열기
            </Button>
            <Modal title="게시글 등록" open={isModalOpen} okText={"등록"} onOk={toggleModal} footer={modalFooter} onCancel={toggleModal}>
                <p>게시글이 등록되었습니다.</p>
            </Modal>
        </>
    );
};

export default App;
