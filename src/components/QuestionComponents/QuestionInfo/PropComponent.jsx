import React, {useEffect} from 'react';
import {Input, Form} from 'antd';

const {TextArea} = Input;

const PropComponent = (props) => {
	const {text, desc, onChange, disabled} = props
	const [form] = Form.useForm()

	useEffect(() => {
		form.setFieldsValue({text, desc})
	}, [text, desc])

	const handleChangeForm = (value) => {
		onChange && onChange(form.getFieldsValue())
	}
	return (
		<Form disabled={disabled} form={form} layout='vertical' initialValues={{text, desc}} onValuesChange={handleChangeForm} >
			<Form.Item label='标题' name='text' rules={[{required: true, message: '请输入标题内容' }]}>
				<Input />
			</Form.Item>
			<Form.Item label='描述' name='desc'>
				<TextArea />
			</Form.Item>
		</Form>
	);
};

export default PropComponent;