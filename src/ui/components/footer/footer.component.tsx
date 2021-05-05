import React from 'react'
import { Typography } from 'antd'
import { CustomFooter } from './footer.styles'

const Footer: React.FC = () => {
    return (
        <CustomFooter style={{ background: '#ffff' }}>
            <Typography>
                {'Made with ♥, coffe, and '}
                <a href="https://ant.design/" target="_blank" rel="noreferrer">
                    Ant Design
                </a>
                {', '}
                {new Date().getFullYear()}.
            </Typography>
        </CustomFooter>
    )
}

export default Footer
