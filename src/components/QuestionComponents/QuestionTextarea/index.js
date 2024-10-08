import Component from './Component.jsx'
import PropComponent from "./PropComponent.jsx";
import {QuestionTextareaDefaultProps} from './Component.jsx'

export default {
	title: '多行输入',
	type: 'questionTextarea',
	Component, // 画布显示的
	PropComponent, // 属性
	defaultProps: QuestionTextareaDefaultProps
}