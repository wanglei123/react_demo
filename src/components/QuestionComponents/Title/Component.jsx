import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

// 默认属性
export const QuestionTitleDefaultProps = {
	text: '一行标题',
	level: 1,
	isCenter: false
}

const QuestionTitle = (props) => {
	const {text = '', level = 1, isCenter = false} = {...QuestionTitleDefaultProps, ...props}
	const getFontSize = (level) => {
		if(level === 1){
			return '24px'
		}
		if(level === 2){
			return '20px'
		}
		if(level === 3){
			return '16px'
		}
		return '16px'
	}
	return (
		<Title
			level={level}
			style={{textAlign : isCenter ? 'center' : 'start', marginBottom: 0, fontSize: getFontSize(level)}} >
			{text}
		</Title>
	);
};

export default QuestionTitle;