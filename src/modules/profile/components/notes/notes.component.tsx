import React, { useState } from 'react'
import { Input, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Button } from './notes.styles'

const { TextArea } = Input

interface INotesProps {
    profileName: string
}

const Notes: React.FC<INotesProps> = ({ profileName }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [inputValue, setInputValue] = useState<string>('')

    const notes = localStorage.getItem(profileName)

    const handleChange = (e: any): void => {
        const { value } = e.target
        setInputValue(value)
    }

    const showModal = (): void => {
        setIsModalVisible(true)
    }

    const handleOk = (): void => {
        localStorage.setItem(profileName, inputValue)
        setIsModalVisible(false)
    }

    const handleCancel = (): void => {
        setIsModalVisible(false)
    }

    return (
        <>
            <Button onClick={showModal}>
                Notes <EditOutlined />
            </Button>
            <Modal
                title={`${profileName} notes`}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <TextArea
                    rows={5}
                    defaultValue={notes || ''}
                    onChange={handleChange}
                />
            </Modal>
        </>
    )
}

export default Notes
