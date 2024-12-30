import { Select, Form } from 'antd'

const Options = Array.from({length: 20}).map((_, v) => ({label: String(v + 1), value: v + 1}))
console.log("🚀 ~ Options:", Options)

export default function (props) {
  const { value, onChange = () => {} } = props
  console.log("🚀 ~ value:", value)
  const { status, errors } = Form.Item.useStatus()

  const handleSelect = (changedValue, key) => {
    onChange({
      ...value,
      [key]: changedValue
    })
  }

  return (
    <div>
      <Select options={Options}
        style={{width: 120}}
        value={value?.from}
        onChange={(val) => {
          handleSelect(val, 'from')
      }}/>
      <Select options={Options}
        style={{width: 120}}
        value={value?.to}
        onChange={(val) => {
          handleSelect(val, 'to')
        }}
      />
      {status === 'error' &&
        errors.length > 0 &&
        errors.map(error => {
          if (typeof error === 'string') {
            return (
              <div
                key={error}
                className="h-5 pt-0.5 text-xs font-normal leading-[18px] text-red"
              >
                {error}
              </div>
            )
          }
          return null
        })}
    </div>
  )
}