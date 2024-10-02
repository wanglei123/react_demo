import React, {useEffect} from 'react';
import { Input, Form } from 'antd';

const PropComponent = (props) => {
	const {title, placeholder, onChange} = props
	const [form] = Form.useForm()

	useEffect(() => {
		form.setFieldsValue({title,placeholder})
	}, [title,placeholder])

	const handleChangeForm = () => {
		onChange && onChange(form.getFieldsValue())
	}
	return (
		<Form form={form} layout='vertical' initialValues={{title, placeholder}} onValuesChange={handleChangeForm} >
			<Form.Item label='标题' name='title' rules={[{required: true, message: '请输入标题' }]}>
				<Input />
			</Form.Item>
			<Form.Item label='Placeholder' name='placeholder' rules={[]}>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default PropComponent;