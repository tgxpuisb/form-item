import { useEffect } from 'react'
import {Form} from 'antd'
import CustomInput from './FormItem'
import './App.css'

function App() {

  const [form] = Form.useForm()

  const interval = Form.useWatch(['interval'], form)

  useEffect(() => {
    setTimeout(() => {
      form.validateFields()
    })
  }, [interval])

  return (
    <Form form={form}>
      <Form.Item name="interval"
        noStyle
        rules={[
          {
            validator(_, interval) {
              if (!interval || !interval.from || !interval.to) {
                return Promise.resolve()
              }
              if (interval.from > interval.to) {
                return Promise.reject('from must not large than to')
              }
              if (interval.from = interval.to) {
                return Promise.reject('from must not equal to')
              }
              return Promise.resolve()
            }
          }
        ]}
        validateFirst
        validateTrigger={false}
      >
        <CustomInput />
      </Form.Item>
    </Form>
  )
}

export default App
