import React from 'react';
import {QuestionTitleDefaultProps} from "../Title/Component.jsx";
import {Typography} from 'antd';

const {Paragraph} = Typography;

// 默认属性
export const QuestionParagraphDefaultProps = {
	text: '一行文本',
	isCenter: false
}

const Component = (props) => {
	const {text = '', isCenter = false} = {...QuestionParagraphDefaultProps, ...props}
	// 尽量不要使用 dangerouslySetInnerHTML 不安全，一些html 标签可以直接显示在textArea中
	const textList = text.split('\n')
	return (
		<Paragraph style={{textAlign : isCenter ? 'center' : 'start', marginBottom: 0}}>
			{textList.map((t, index) => {
				return <span key={index}>
					{index > 0 && <br />}
					{t}
				</span>
			})}
		</Paragraph>
	);
};

export default Component;