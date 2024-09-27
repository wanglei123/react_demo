import React from 'react';
import {Typography, Input} from 'antd';

const {Paragraph} = Typography;

// 默认属性
export const QuestionInputDefaultProps = {
	title: '输入框标题',
	placeholder: '请输入...',
}

const QuestionInput = (props) => {
	const {title, placeholder } = {...QuestionInputDefaultProps, ...props}

	return (
		<div>
			<Paragraph strong>{title}</Paragraph>
			<div>
				<Input placeholder={placeholder}/>
			</div>
		</div>
	);
};

export default QuestionInput;