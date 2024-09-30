// 组件的配置
import QuestionTitle from './Title'
import QuestionInput from './Input'

// 定义全部组件配置的列表
const componentConfList = [QuestionTitle,QuestionInput]

// 组件分组
export const componentConfGroup = [
	{
		groupId: 'textGroup',
		groupName: '文本显示',
		components: [QuestionTitle]
	},
	{
		groupId: 'inputGroup',
		groupName: '输入显示',
		components: [QuestionInput]
	}
]

export function getComponentConfByType (type) {
	return componentConfList.find(componentConf => componentConf.type === type)
}