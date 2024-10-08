import React from 'react';
import {Divider, Typography} from 'antd';

const {Title, Paragraph} = Typography;

// 默认属性
export const QuestionInfoDefaultProps = {
	text: '标题',
	desc: '描述',
}

const QuestionTitle = (props) => {
	const {text = '', desc = ''} = {...QuestionInfoDefaultProps, ...props}
	const descList = desc.split('\n')
	return (
		<div style={{textAlign: 'center'}}>
			<Title style={{fontSize: '24px', marginBottom: 0}} >
				{text}
			</Title>
			<Paragraph style={{ marginBottom: 0}}>
				{descList.map((t, index) => {
					return <span key={index}>
					{index > 0 && <br />}
						{t}
				</span>
				})}
			</Paragraph>
		</div>
	);
};

export default QuestionTitle;