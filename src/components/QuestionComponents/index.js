// 组件的配置
import QuestionTitle from './Title'
import QuestionInput from './Input'
import QuestionPargraph from "./QuestionPargraph/index.js";
import QuestionInfo from "./QuestionInfo/index.js";
import questionTextarea from "./QuestionTextarea/index.js";

// 定义全部组件配置的列表
const componentConfList = [QuestionTitle,QuestionInput, QuestionPargraph, QuestionInfo, questionTextarea]

// 组件分组
export const componentConfGroup = [
	{
		groupId: 'textGroup',
		groupName: '文本显示',
		components: [QuestionTitle, QuestionPargraph, QuestionInfo]
	},
	{
		groupId: 'inputGroup',
		groupName: '输入显示',
		components: [QuestionInput,questionTextarea]
	}
]

export function getComponentConfByType (type) {
	return componentConfList.find(componentConf => componentConf.type === type)
}