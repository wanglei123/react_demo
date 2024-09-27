// 组件的配置
import QuestionTitle from './Title'
import QuestionInput from './Input'

// 定义全部组件配置的列表
const componentConfList = [QuestionTitle,QuestionInput]

export function getComponentConfByType (type) {
	return componentConfList.find(componentConf => componentConf.type === type)
}