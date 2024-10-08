import React from 'react';
import {Typography, Input} from 'antd';

const {TextArea} = Input;

const {Paragraph} = Typography;

// 默认属性
export const QuestionTextareaDefaultProps = {
	title: '多行输入',
	placeholder: '请输入...',
}

const QuestionInput = (props) => {
	const {title, placeholder } = {...QuestionTextareaDefaultProps, ...props}

	return (
		<div>
			<Paragraph strong>{title}</Paragraph>
			<div>
				<TextArea placeholder={placeholder}/>
			</div>
		</div>
	);
};

export default QuestionInput;