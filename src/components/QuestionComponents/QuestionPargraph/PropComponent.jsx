import React, {useEffect} from 'react';
import {Input, Form,Checkbox} from 'antd';

const {TextArea} = Input;

const PropComponent = (props) => {
	const {text, isCenter, onChange, disabled} = props
	const [form] = Form.useForm()

	useEffect(() => {
		form.setFieldsValue({text, isCenter})
	}, [text, isCenter])

	const handleChangeForm = (value) => {
		onChange && onChange(form.getFieldsValue())
	}
	return (
		<Form disabled={disabled} form={form} layout='vertical' initialValues={{text, isCenter}} onValuesChange={handleChangeForm} >
			<Form.Item label='段落内容' name='text' rules={[{required: true, message: '请输入段落内容' }]}>
				<TextArea />
			</Form.Item>
			<Form.Item name='isCenter' valuePropName='checked' >
				<Checkbox>居中显示</Checkbox>
			</Form.Item>
		</Form>
	);
};

export default PropComponent;